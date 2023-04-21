
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.ResExclusionSupp")]
    [BasedOnRow(typeof(Entities.ResExclusionSuppRow), CheckNames = true)]
    public class ResExclusionSuppForm
    {
        public Int64 ResId { get; set; }
        public DateTime FromDataAsOfDt { get; set; }
        public DateTime ToDataAsOfDt { get; set; }
        public String CommentTxt { get; set; }
        [Visible(false)]
        public DateTime CreatedTs { get; set; }
        [Visible(false)]
        public String CreatedByNam { get; set; }
        [Visible(false)]
        public DateTime ModifiedTs { get; set; }
        [Visible(false)]
        public String ModifiedByNam { get; set; }
    }
}