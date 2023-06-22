namespace DAP.DWSupport.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("DWSupport.AirCostAdjSuppExcelImport")]
    public class AirCostAdjSuppExcelImportForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}