
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.ResExclusionSupp")]
    [BasedOnRow(typeof(Entities.ResExclusionSuppRow), CheckNames = true)]
    public class ResExclusionSuppColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ResExclusionId { get; set; }
        public Int64 ResId { get; set; }
        public DateTime FromDataAsOfDt { get; set; }
        public DateTime ToDataAsOfDt { get; set; }
        [EditLink]
        public String CommentTxt { get; set; }
        public DateTime CreatedTs { get; set; }
        public String CreatedByNam { get; set; }
        public DateTime ModifiedTs { get; set; }
        public String ModifiedByNam { get; set; }
    }
}