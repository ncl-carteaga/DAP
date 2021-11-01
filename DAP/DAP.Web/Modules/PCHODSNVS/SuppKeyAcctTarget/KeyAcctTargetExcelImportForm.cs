namespace DAP.PCHODSNVS.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("PCHODSNVS.KeyAcctTargetExcelImport")]
    public class KeyAcctTargetExcelImportForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}