﻿
namespace DAP.DWSupport.Endpoints
{
    using OfficeOpenXml;
    using Serenity;
    using Serenity.Data;
    using Serenity.Reporting;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.IO;
    using System.Linq;
    using jImpHelp = myImportFields.ExcelImportHelper;
    using myImpHelp = myImportHelper.ExcelImportHelper;
    using myImpHelpExt = myImportHelper.myExtension;
    using DAP.DWSupport.Repositories;
    using System.Web.Mvc;
    using MyRepository = Repositories.CapacitySuppRepository;
    using MyRow = Entities.CapacitySuppRow;
    using DAP.DWSupport.Entities;

    [RoutePrefix("Services/DWSupport/CapacitySupp"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class CapacitySuppController : ServiceEndpoint
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

        // Export endpoint
        [HttpPost]
        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.CapacitySuppColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "CapacitySupp" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }




        [HttpPost]
        public ExcelImportResponse ExcelImport(IUnitOfWork uow, ExcelImportRequest request)
        {
            //-------------------------- Gather Excel File Data ------------------------------------------------------------//
            // load file from filestream and load into Excel api, then create request
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

            // use Excel api object to handle file
            /*Read the first Excel sheet and then gather the headers of the import file*/
            var worksheet = ep.Workbook.Worksheets.First();
            var wsStart = worksheet.Dimension.Start;
            var wsEnd = worksheet.Dimension.End;
            var headers = worksheet.Cells[wsStart.Row, wsStart.Column, 1, wsEnd.Column];

            // -------------------------- Gather Mapping Information -------------------------- //

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
                importedHeaders.Add(q.Text.ToLower());
                //response.ErrorList.Add(q.Text);
            }

            if (!importedHeaders.Contains(MyRow.Fields.ShipCd.Title.ToLower(), StringComparer.OrdinalIgnoreCase) == true)
            {
                response.ErrorList.Add("Missing Required Column" + MyRow.Fields.ShipCd.Title);
            }
            if (!importedHeaders.Contains(MyRow.Fields.SailStartDate.Title.ToLower(), StringComparer.OrdinalIgnoreCase) == true)
            {
                response.ErrorList.Add("Missing Required Column" + MyRow.Fields.SailStartDate.Title);
            }
            if (!importedHeaders.Contains(MyRow.Fields.SailEndDate.Title.ToLower(), StringComparer.OrdinalIgnoreCase) == true)
            {
                response.ErrorList.Add("Missing Required Column" + MyRow.Fields.SailEndDate.Title);
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
                systemHeaders.Add(t.Title.ToLower());
            };

            /* Not all columns will be expected to be imported. To avoid unnecesary error messages 
             * we add the titles of the fields we want ignored here.*/
            //exceptionHeaders.Add(myFields.AddressLogId.Title.ToLower());

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

                    // ---------- Get fields to check against DB (as Composite Prim Key) ---------- //
                    var ship_cd = "";
                    var sail_start = DateTime.MinValue;
                    var sail_end = DateTime.MinValue;


                    entType = jImpHelp.entryType.String;            //excel field type
                    fieldTitle = myFields.ShipCd.Title.ToLower();   //excel field name
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            ship_cd = a; //designate the field to be updated in the system
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.dateTime;                  //excel field type
                    fieldTitle = myFields.SailStartDate.Title.ToLower();    //excel field name
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            sail_start = a; //designate the field to be updated in the system
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.dateTime;                  //excel field type
                    fieldTitle = myFields.SailEndDate.Title.ToLower();      //excel field name
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            sail_end = a; //designate the field to be updated in the system
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }   
                    // ---------------------------------------------------------------------------- //


                    // ----------------------------------------------- //

                    // Check if row exists in DB
                    var currentRow = uow.Connection.TryFirst<CapacitySuppRow>(q => q
                        .Select(myFields.CapacityId)
                        .Where(
                            myFields.ShipCd == ship_cd
                            &&
                            myFields.SailStartDate == sail_start
                            &&
                            myFields.SailEndDate == sail_end
                        )
                    );

                    // Row doesn't exist in DB
                    if (currentRow == null)
                        currentRow = new CapacitySuppRow
                        {
                            ShipCd = ship_cd,
                            SailStartDate = sail_start,
                            SailEndDate = sail_end
                        };
                    else
                    {
                        // avoid assignment errors
                        currentRow.TrackWithChecks = false;
                    }


                    // ----------   Create Row from Excel Values   ---------- //
                    entType = jImpHelp.entryType.Int;                   //excel field type
                    fieldTitle = myFields.DoCapacity.Title.ToLower();   //excel field name
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.DoCapacity = a;        //designate the field to be updated in the system
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Int;            //excel field type
                    fieldTitle = myFields.CabinCapacity.Title.ToLower();            //excel field name
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.CabinCapacity = a; //designate the field to be updated in the system
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.dateTime;            //excel field type
                    fieldTitle = myFields.EffectiveFromDt.Title.ToLower();            //excel field name
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.EffectiveFromDt = a;
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.dateTime;    //excel field type
                    fieldTitle = myFields.EffectiveToDt.Title.ToLower();  //excel field name
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.EffectiveToDt = a; //designate the field to be updated in the system
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    // current field value to validate against Model

                    //----------------------------------------Run Object Entries with Create or Update ------------------------------------//
                    if (currentRow.CapacityId == null)
                    {
                        new CapacitySuppRepository().Create(uow, new SaveWithLocalizationRequest<MyRow>
                        {
                            Entity = currentRow
                        });
                        response.Inserted = response.Inserted + 1;
                    }
                    else
                    {
                        new CapacitySuppRepository().Update(uow, new SaveWithLocalizationRequest<MyRow>
                        {
                            Entity = currentRow,
                            EntityId = currentRow.CapacityId.Value
                        });
                        response.Updated = response.Updated + 1;
                    }




                }
                catch (Exception ex)
                {
                    // if current row matches thrown exception, add msessage from current field
                    var msg = (ex.Message.Contains(fieldTitle)) ? "Exception on Row " + row + ": Field: " + fieldTitle + ": " : "";
                    // replace null references with user friendly message
                    var exc = (ex.Message.Contains("Object reference")) ? "Empty rows found." : ex.Message;
                    response.ErrorList.Add("Error on row " + row + ": " + msg + exc);
                }
            } // for loop

            return response;
        }
    }
}