
namespace DAP.DWSupport.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Reporting;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.TblStrategicPriceControlRepository;
    using MyRow = Entities.TblStrategicPriceControlRow;
    using myImpHelp = myImportHelper.ExcelImportHelper;
    using myImpHelpExt = myImportHelper.myExtension;
    using jImpHelp = myImportFields.ExcelImportHelper;
    using OfficeOpenXml;
    using System.IO;
    using System.Collections.Generic;
    using System.Linq;
    using DAP.DWSupport.Repositories;
    using DAP.DWSupport.Entities;

    [RoutePrefix("Services/DWSupport/TblStrategicPriceControl"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class TblStrategicPriceControlController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }

        [HttpPost]
        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.TblStrategicPriceControlColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "StrategicPriceControl_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }

        [HttpPost]
        public ExcelImportResponse ExcelImport(IUnitOfWork uow, ExcelImportRequest request)
        {
            //-------------------------- Gather Excel File Data ------------------------------------------------------------//

            request.CheckNotNull();
            var fName = request.FileName;
            Check.NotNullOrWhiteSpace(fName, "filename");
            UploadHelper.CheckFileNameSecurity(fName);

            if (!request.FileName.StartsWith("temporary/"))
                throw new ArgumentOutOfRangeException("filename");

            ExcelPackage ep = new ExcelPackage();
            using (var fs = new FileStream(UploadHelper.DbFilePath(fName), FileMode.Open, FileAccess.Read))
                ep.Load(fs);

            var response = new ExcelImportResponse();
            var myErrors = response.ErrorList = new List<string>();

            /*Read the first Excell sheet and then gather the headers of the import file*/
            var worksheet = ep.Workbook.Worksheets.First();
            var wsStart = worksheet.Dimension.Start;
            var wsEnd = worksheet.Dimension.End;
            var headers = worksheet.Cells[wsStart.Row, wsStart.Column, 1, wsEnd.Column];

            //-------------------------- Gather Mapping nformation ------------------------------------------------------------//

            /*A few variables to make our life easier*/
            var myConnection = uow.Connection;
            var myFields = MyRow.Fields;
            List<string> importedHeaders = new List<string>(); //Headers from Imported File 
            List<object> importedValues = new List<object>(); //Values being Imported
            List<string> systemHeaders = new List<string>(); //Headers currently in system
            List<string> sysHeader = new List<string>(); //System Header to import
            List<string> exceptionHeaders = new List<string>(); //Haders to not check for during import. 
            object obj = null; //Object container for value being imported
            dynamic a = null; //Handled object to assign to system
            string fieldTitle = ""; //Title of field being imported
            jImpHelp.entryType entType; //Type of handler to use. 

            /*Add Imported file headers to proper list*/
            foreach (var q in headers)
            {
                importedHeaders.Add(q.Text);
                //response.ErrorList.Add(q.Text);
            }

            if (!importedHeaders.Contains("sail id", StringComparer.OrdinalIgnoreCase) == true)
            {
                response.ErrorList.Add("Missing Required Column Sail_Id");
            }
            if (!importedHeaders.Contains("category cd", StringComparer.OrdinalIgnoreCase) == true)
            {
                response.ErrorList.Add("Missing Required Column Category_Cd");
            }

            if (response.ErrorList.Count > 0)
            {
                return response;
            }

            /*  Add system headers to proper list while also adding 'ID' to the list. 'ID'
             *  is the key field from exported files and needs to be mapped manually */
            systemHeaders.Add("ID");
            foreach (var t in myFields)
            {
                systemHeaders.Add(t.Title);
            };

            /* Not all columns will be expected to be imported. To avoid unnecesary error messages 
             * we add the titles of the fields we want ignored here.*/
            //exceptionHeaders.Add(myFields.AddressLogId.Title);

            /* Using the systemHeaders to compare against the importedHeaders, we build an index with 
            * the column location and match it to the system header using a Dictionary<string, int>. */

            Dictionary<string, int> headerMap = myImpHelp.myExcelHeaderMap(importedHeaders, systemHeaders, myErrors, exceptionHeaders);

            for (var row = 2; row <= wsEnd.Row; row++)
            {
                try
                {
                    /* This instance checks the ID field as to whether the row exists or not. if the 
                     * ID key exists, it will use it to update the row with the imported fields but if
                     * it does not exist, it creates a new entry. */


                    long sail_id=0; // = myFields.CompanyCd;
                    string category_cd = ""; // = myFields.AccountPeriodNum;

                    entType = jImpHelp.entryType.Int; //designate the type of item
                    fieldTitle = myFields.SailId.Title; //designate the field to be looked at
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            sail_id = a; //designate the field to be updated in the system
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.String; //designate the type of item
                    fieldTitle = myFields.CategoryCd.Title; //designate the field to be looked at
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            category_cd = a; //designate the field to be updated in the system
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    var currentRow = uow.Connection.TryFirst<TblStrategicPriceControlRow>(q => q
                        .Select(myFields.StrategicPriceControlId)
                        .Where(myFields.SailId == sail_id && myFields.CategoryCd == category_cd.ToString()));

                    if (currentRow == null)
                        currentRow = new TblStrategicPriceControlRow
                        {
                            SailId = sail_id,
                            CategoryCd = category_cd.ToString()
                        };
                    else
                    {
                        // avoid assignment errors
                        currentRow.TrackWithChecks = false;
                    }

                    entType = jImpHelp.entryType.dateTime; //designate the type of item
                    fieldTitle = myFields.EffectiveFromDat.Title; //designate the field to be looked at
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.EffectiveFromDat = a; //designate the field to be updated in the system
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.dateTime; //designate the type of item
                    fieldTitle = myFields.EffectiveToDat.Title; //designate the field to be looked at
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.EffectiveToDat = a; //designate the field to be updated in the system
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Int; //designate the type of item
                    fieldTitle = myFields.DiscPct.Title; //designate the field to be looked at
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.DiscPct = a; //designate the field to be updated in the system
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    

                    //----------------------------------------Run Object Entries with Create or Update ------------------------------------//
                    if (currentRow.StrategicPriceControlId == null)
                    {
                        new TblStrategicPriceControlRepository().Create(uow, new SaveWithLocalizationRequest<MyRow>
                        {
                            Entity = currentRow
                        });
                        response.Inserted = response.Inserted + 1;
                    }
                    else
                    {
                        new TblStrategicPriceControlRepository().Update(uow, new SaveWithLocalizationRequest<MyRow>
                        {
                            Entity = currentRow,
                            EntityId = currentRow.StrategicPriceControlId.Value
                        });
                        response.Updated = response.Updated + 1;
                    }




                }
                catch (Exception ex)
                {
                    //myErrors.Add(myImpHelp.eMessage3(row, ex.Message));
                    response.ErrorList.Add("Exception on Row " + row + ": Field: " + fieldTitle + ": " + ex.Message);
                    //response.ErrorList.Add("Value: " + a);
                }
            }
            return response;
        }

    }
}
