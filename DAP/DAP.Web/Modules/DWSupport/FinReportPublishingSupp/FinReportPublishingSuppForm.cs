
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.FinReportPublishingSupp")]
    [BasedOnRow(typeof(Entities.FinReportPublishingSuppRow), CheckNames = true)]
    public class FinReportPublishingSuppForm
    {
        public DateTime PublishDat { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String PublishCommentsTxt { get; set; }
        public Boolean PublishCd { get; set; }
        [Visible(false)]
        public DateTime CreatedTs { get; set; }
        [Visible(false)]
        public String CreatedByNam { get; set; }
        [Visible(false)]
        public DateTime ModifiedTs { get; set; }
        [Visible(false)]
        public String ModifiedByNam { get; set; }
        public DateTime ProcessedDateTs { get; set; }
    }
}