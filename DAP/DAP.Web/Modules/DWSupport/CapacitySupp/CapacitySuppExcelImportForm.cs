namespace DAP.DWSupport.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("DWSupport.CapacitySuppExcelImport")]
    public class CapacitySuppExcelImportForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}