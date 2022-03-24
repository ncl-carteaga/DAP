namespace DAP.PCHODSNVS.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("PCHODSNVS.NtrPastMonthsActualExcelImport")]
    public class NtrPastMonthsActualExcelImportForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}