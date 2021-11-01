
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.SurveyFilterExclusionSupp")]
    [BasedOnRow(typeof(Entities.SurveyFilterExclusionSuppRow), CheckNames = true)]
    public class SurveyFilterExclusionSuppColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 SurveyExclusionSurKey { get; set; }
        [EditLink]
        public Int64 SurveyExclusionId { get; set; }
        [EditLink]
        public String ReasonDesc { get; set; }
        public String CommentsTxt { get; set; }
        public Int32 SailId { get; set; }
        public Int32 GuestId { get; set; }
        public DateTime CreatedTs { get; set; }
        public String CreatedByNam { get; set; }
        public String ModifiedByNam { get; set; }
        public DateTime ModifiedTs { get; set; }
    }
}