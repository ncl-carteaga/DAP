namespace DAP.PCHDW.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("PCHDW.DimCruiseExcelImport")]
    public class DimCruiseExcelImportForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}