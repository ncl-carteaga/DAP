namespace DAP.DWSupport.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("DWSupport.TblStrategicPriceControlExcelImport")]
    public class TblStrategicPriceControlExcelImportForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}