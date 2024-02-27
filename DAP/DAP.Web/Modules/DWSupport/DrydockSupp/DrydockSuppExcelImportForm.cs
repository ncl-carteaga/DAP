namespace DAP.DWSupport.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("DWSupport.DrydockSuppExcelImport")]
    public class DrydockSuppExcelImportForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}