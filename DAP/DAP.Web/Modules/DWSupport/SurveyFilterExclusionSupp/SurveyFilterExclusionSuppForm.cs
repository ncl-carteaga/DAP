
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.SurveyFilterExclusionSupp")]
    [BasedOnRow(typeof(Entities.SurveyFilterExclusionSuppRow), CheckNames = true)]
    public class SurveyFilterExclusionSuppForm
    {
        public Int64 SurveyExclusionId { get; set; }
        public String ReasonDesc { get; set; }
        public String CommentsTxt { get; set; }
        public Int32 SailId { get; set; }
        public Int32 GuestId { get; set; }
        [Visible(false)]
        public DateTime CreatedTs { get; set; }
        [Visible(false)]
        public String CreatedByNam { get; set; }
        [Visible(false)]
        public String ModifiedByNam { get; set; }
        [Visible(false)]
        public DateTime ModifiedTs { get; set; }
    }
}