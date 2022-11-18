namespace DAP.NCLHDSAR.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("NCLHDSAR.MarketingRequestExcelImport")]
    public class MarketingRequestExcelImportForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}