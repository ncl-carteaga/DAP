
namespace DAP.PCHODSNVS.Endpoints
{
    using Serenity;
    using OfficeOpenXml;
    using Serenity.Data;
    using Serenity.Reporting;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.IO;
    using System.Web.Mvc;
    using Entities;
    using Repositories;
    using myImpHelp = myImportHelper.ExcelImportHelper;
    using myImpHelpExt = myImportHelper.myExtension;
    using jImpHelp = myImportFields.ExcelImportHelper;
    using MyRepository = Repositories.SuppKeyAcctTargetRepository;
    using MyRow = Entities.SuppKeyAcctTargetRow;
    using System.Linq;

    [RoutePrefix("Services/PCHODSNVS/SuppKeyAcctTarget"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class SuppKeyAcctTargetController : ServiceEndpoint
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
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.SuppKeyAcctTargetColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "SuppKeyAcctTarget_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }

        [HttpPost]
        public ExcelImportResponse ExcelImport(IUnitOfWork uow, ExcelImportRequest request)
        {
            request.CheckNotNull();
            Check.NotNullOrWhiteSpace(request.FileName, "filename");

            UploadHelper.CheckFileNameSecurity(request.FileName);

            if (!request.FileName.StartsWith("temporary/"))
                throw new ArgumentOutOfRangeException("filename");

            ExcelPackage ep = new ExcelPackage();
            using (var fs = new FileStream(UploadHelper.DbFilePath(request.FileName), FileMode.Open, FileAccess.Read))
                ep.Load(fs);
            /*
            var p = ProductRow.Fields;
            var s = SupplierRow.Fields;
            var c = CategoryRow.Fields;
            */
            var s = SuppKeyAcctTargetRow.Fields;

            var response = new ExcelImportResponse();
            response.ErrorList = new List<string>();
            
            var worksheet = ep.Workbook.Worksheets[1];
            for (var row = 2; row <= worksheet.Dimension.End.Row; row++)
            {
                try
                {
                    var CompanyCD = Convert.ToString(worksheet.Cells[row, 1].Value ?? "");
                    var YearNbr = Convert.ToString(worksheet.Cells[row, 2].Value ?? "");
                    var KeyAcct = Convert.ToString(worksheet.Cells[row, 3].Value ?? "");
                    if (CompanyCD.IsTrimmedEmpty() || YearNbr.IsTrimmedEmpty() || KeyAcct.IsTrimmedEmpty())
                        continue;

                    var SuppKeyAcctTarget = uow.Connection.TryFirst<SuppKeyAcctTargetRow>(q => q
                        .Select(s.KeyAcctTk)
                        .Where(s.CompanyCd == CompanyCD && s.Year == YearNbr && s.KeyAcctLink == KeyAcct));

                    if (SuppKeyAcctTarget == null)
                        SuppKeyAcctTarget = new SuppKeyAcctTargetRow
                        {
                            CompanyCd = Convert.ToDouble(CompanyCD),
                            Year = Convert.ToInt16(YearNbr),
                            KeyAcctLink = KeyAcct
                        };
                    else
                    {
                        // avoid assignment errors
                        SuppKeyAcctTarget.TrackWithChecks = false;
                    }

                    //product.CcfTargetQ1 = Convert.ToString(worksheet.Cells[row, 4].Value ?? "");
                    SuppKeyAcctTarget.CcfTargetQ1 = Convert.ToDecimal(worksheet.Cells[row, 5].Value ?? 0);
                    //product.UnitsInStock = Convert.ToInt16(worksheet.Cells[row, 6].Value ?? 0);
                                      

                    if (SuppKeyAcctTarget.KeyAcctTk == null)
                    {
                        new SuppKeyAcctTargetRepository().Create(uow, new SaveRequest<MyRow>
                        {
                            Entity = SuppKeyAcctTarget
                        });

                        response.Inserted = response.Inserted + 1;
                    }
                    else
                    {
                        new SuppKeyAcctTargetRepository().Update(uow, new SaveRequest<MyRow>
                        {
                            Entity = SuppKeyAcctTarget,
                            EntityId = SuppKeyAcctTarget.KeyAcctTk.Value
                        });

                        response.Updated = response.Updated + 1;
                    }
                }
                catch (Exception ex)
                {
                    response.ErrorList.Add("Exception on Row " + row + ": " + ex.Message);
                }
            }
            
            return response;
        }

        [HttpPost]
        public ExcelImportResponse ExcelImport2(IUnitOfWork uow, ExcelImportRequest request)
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
            }

            if (!importedHeaders.Contains("Company Cd", StringComparer.OrdinalIgnoreCase) == true)
            {
                response.ErrorList.Add("Missing Required Column CompanyCd");
            }
            if (!importedHeaders.Contains("Year", StringComparer.OrdinalIgnoreCase) == true)
            {
                response.ErrorList.Add("Missing Required Column Year");
            }
            if (!importedHeaders.Contains("Key Acct Link", StringComparer.OrdinalIgnoreCase) == true)
            {
                response.ErrorList.Add("Missing Required Column KeyAcctLink");
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

                    double CompanyCD = 0; // = myFields.CompanyCd;
                    int YearNbr = 0; // = myFields.Year;
                    string KeyAcct = ""; // = myFields.KeyAcctLink;

                    entType = jImpHelp.entryType.Double; //designate the type of item
                    fieldTitle = myFields.CompanyCd.Title; //designate the field to be looked at
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            CompanyCD = a; //designate the field to be updated in the system
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Int; //designate the type of item
                    fieldTitle = myFields.Year.Title; //designate the field to be looked at
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            YearNbr = a; //designate the field to be updated in the system
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.String; //designate the type of item
                    fieldTitle = myFields.KeyAcctLink.Title; //designate the field to be looked at
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            KeyAcct = a; //designate the field to be updated in the system
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    var currentRow = uow.Connection.TryFirst<SuppKeyAcctTargetRow>(q => q
                        .Select(myFields.KeyAcctTk)
                        .Where(myFields.CompanyCd == Convert.ToDouble(CompanyCD) && myFields.Year == Convert.ToInt16(YearNbr) && myFields.KeyAcctLink == KeyAcct.ToString()));

                    if (currentRow == null)
                        currentRow = new SuppKeyAcctTargetRow
                        {
                            CompanyCd = Convert.ToDouble(CompanyCD),
                            Year = Convert.ToInt16(YearNbr),
                            KeyAcctLink = KeyAcct.ToString()
                        };
                    else
                    {
                        // avoid assignment errors
                        currentRow.TrackWithChecks = false;
                    }

                    //        //var sysKey = myFields.KeyAcctLink;
                    //        //obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, "ID").Value, worksheet);
                    //        //var wsKeyField = Convert.ToInt32(obj);
                    //        //var currentRow = myConnection.TryFirst<MyRow>(q => q.Select(sysKey).Where(sysKey == wsKeyField));

                    //        //if (currentRow == null) //Create New if Row doesnt' exist
                    //        //    currentRow = new MyRow() { };
                    //        //else
                    //        //    currentRow.TrackWithChecks = false;



                    //--------------------------Merge Imported Fields ------------------------------------------------------------//

                    #region "Value Fields"

                    entType = jImpHelp.entryType.String; //designate the type of item
                    fieldTitle = myFields.AgencyCd.Title; //designate the field to be looked at
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.AgencyCd = a; //designate the field to be updated in the system
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.String; //designate the type of item
                    fieldTitle = myFields.AccountType.Title; //designate the field to be looked at
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.AccountType = a; //designate the field to be updated in the system
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //designate the type of item
                    fieldTitle = myFields.CcfTargetQ1.Title; //designate the field to be looked at
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.CcfTargetQ1 = a; //designate the field to be updated in the system
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    /*Same as above, just updated for the next field. */
                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.CcfTargetQ12.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.CcfTargetQ12 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.CcfTargetQ13.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.CcfTargetQ13 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.CcfTargetQ14.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.CcfTargetQ14 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.CcfTargetQ15.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.CcfTargetQ15 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.CcfTargetQ2.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.CcfTargetQ2 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.CcfTargetQ22.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.CcfTargetQ22 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.CcfTargetQ23.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.CcfTargetQ23 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.CcfTargetQ24.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.CcfTargetQ24 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.CcfTargetQ25.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.CcfTargetQ25 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.CcfTargetQ3.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.CcfTargetQ3 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.CcfTargetQ32.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.CcfTargetQ32 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.CcfTargetQ33.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.CcfTargetQ33 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.CcfTargetQ34.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.CcfTargetQ34 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.CcfTargetQ35.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.CcfTargetQ35 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.CcfTargetQ4.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.CcfTargetQ4 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.CcfTargetQ42.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.CcfTargetQ42 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.CcfTargetQ43.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.CcfTargetQ43 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.CcfTargetQ44.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.CcfTargetQ44 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.CcfTargetQ45.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.CcfTargetQ45 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.PrctTargetQ1.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.PrctTargetQ1 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.PrctTargetQ12.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.PrctTargetQ12 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.PrctTargetQ13.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.PrctTargetQ13 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.PrctTargetQ14.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.PrctTargetQ14 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.PrctTargetQ15.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.PrctTargetQ15 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.PrctTargetQ2.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.PrctTargetQ2 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.PrctTargetQ22.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.PrctTargetQ22 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.PrctTargetQ23.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.PrctTargetQ23 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.PrctTargetQ24.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.PrctTargetQ24 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.PrctTargetQ25.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.PrctTargetQ25 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.PrctTargetQ3.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.PrctTargetQ3 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.PrctTargetQ32.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.PrctTargetQ32 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.PrctTargetQ33.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.PrctTargetQ33 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.PrctTargetQ34.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.PrctTargetQ34 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }


                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.PrctTargetQ35.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.PrctTargetQ35 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.PrctTargetQ4.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.PrctTargetQ4 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.PrctTargetQ42.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.PrctTargetQ42 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.PrctTargetQ43.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.PrctTargetQ43 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.PrctTargetQ44.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.PrctTargetQ44 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.PrctTargetQ45.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.PrctTargetQ45 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }



                    // ADD NEW FIELDS


                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.CcfTargetFy1.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.CcfTargetFy1 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.CcfTargetFy2.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.CcfTargetFy2 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.CcfTargetFy3.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.CcfTargetFy3 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.CcfTargetFy4.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.CcfTargetFy4 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    entType = jImpHelp.entryType.Decimal; //<--Update Me according to type of field to merge with
                    fieldTitle = myFields.CcfTargetFy5.Title;//<--Update Me
                    obj = myImpHelp.myExcelVal(row, myImpHelpExt.GetEntry(headerMap, fieldTitle).Value, worksheet);
                    if (obj != null)
                    {
                        importedValues.Add(obj);
                        sysHeader.Add(fieldTitle);
                        a = jImpHelp.myImportEntry(importedValues, myErrors, sysHeader, row, entType, myConnection);
                        if (a != null)
                        {
                            currentRow.CcfTargetFy5 = a; //<--Update Me
                        }
                        sysHeader.Clear();
                        importedValues.Clear();
                    }

                    #endregion

                    //----------------------------------------Run Object Entries with Create or Update ------------------------------------//
                    if (currentRow.KeyAcctTk == null)
                    {
                        new SuppKeyAcctTargetRepository().Create(uow, new SaveWithLocalizationRequest<MyRow>
                        {
                            Entity = currentRow
                        });
                        response.Inserted = response.Inserted + 1;
                    }
                    else
                    {
                        new SuppKeyAcctTargetRepository().Update(uow, new SaveWithLocalizationRequest<MyRow>
                        {
                            Entity = currentRow,
                            EntityId = currentRow.KeyAcctTk.Value
                        });
                        response.Updated = response.Updated + 1;
                    }
                }
                catch (Exception ex)
                {
                    //myErrors.Add(myImpHelp.eMessage3(row, ex.Message));
                    response.ErrorList.Add("Exception on Row " + row + ": " + ex.Message);
                }
            }
            return response;
        }
    }
}
