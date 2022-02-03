namespace DAP.PCHODSNVS.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("PCHODSNVS.NtrBudgetByChannelExcelImport")]
    public class NtrBudgetByChannelExcelImportForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}