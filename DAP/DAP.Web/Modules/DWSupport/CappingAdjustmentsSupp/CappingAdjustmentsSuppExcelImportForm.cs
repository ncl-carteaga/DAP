﻿namespace DAP.DWSupport.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("DWSupport.CappingAdjustmentsSuppExcelImport")]
    public class CappingAdjustmentsSuppExcelImportForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}