namespace DAP.DWSupport.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("DWSupport.ResExclusionSuppExcelImport")]
    public class ResExclusionSuppExcelImportForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}