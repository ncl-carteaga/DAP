
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.SailingExclusionSupp")]
    [BasedOnRow(typeof(Entities.SailingExclusionSuppRow), CheckNames = true)]
    public class SailingExclusionSuppColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SailingExclusionId { get; set; }
        [EditLink]
        public String ShipCd { get; set; }
        public Int32 MainSailId { get; set; }
        public DateTime MainSailDt { get; set; }
        public String MainVoyageCd { get; set; }
        public DateTime FromDataAsOfDt { get; set; }
        public DateTime ToDataAsOfDt { get; set; }
        public String CommentTxt { get; set; }
        public DateTime CreatedTs { get; set; }
        public String CreatedByNam { get; set; }
        public DateTime ModifiedTs { get; set; }
        public String ModifiedByNam { get; set; }
    }
}