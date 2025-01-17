﻿
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.FinReportPublishingSupp")]
    [BasedOnRow(typeof(Entities.FinReportPublishingSuppRow), CheckNames = true)]
    public class FinReportPublishingSuppColumns
    {
        [DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 FinReportPublishingSurKey { get; set; }
        [EditLink, Width(400)]
        public String ReportName { get; set; }
        [Width(200)]
        public Boolean OnHold { get; set; }
        public DateTime CreatedTs { get; set; }
        public String CreatedByNam { get; set; }
        public DateTime ModifiedTs { get; set; }
        public String ModifiedByNam { get; set; }
    }
}