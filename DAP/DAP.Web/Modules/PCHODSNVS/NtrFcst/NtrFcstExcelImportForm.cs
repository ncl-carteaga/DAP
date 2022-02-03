namespace DAP.PCHODSNVS.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("PCHODSNVS.NtrFcstExcelImport")]
    public class NtrFcstExcelImportForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}