namespace DAP.PCHODSNVS.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("PCHODSNVS.TransferEstimateOciAmtExcelImport")]
    public class TransferEstimateOciAmtExcelImportForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}