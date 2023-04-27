namespace DAP.DWSupport.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("DWSupport.VoyageBudgetFinalExcelImport")]
    public class VoyageBudgetFinalExcelImportForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}