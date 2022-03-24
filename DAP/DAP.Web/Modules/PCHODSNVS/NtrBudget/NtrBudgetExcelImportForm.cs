namespace DAP.PCHODSNVS.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("PCHODSNVS.NtrBudgetExcelImport")]
    public class NtrBudgetExcelImportForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}