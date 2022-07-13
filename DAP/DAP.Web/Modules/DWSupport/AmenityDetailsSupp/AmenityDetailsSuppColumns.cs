
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.AmenityDetailsSupp")]
    [BasedOnRow(typeof(Entities.AmenityDetailsSuppRow), CheckNames = true)]
    public class AmenityDetailsSuppColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, Visible(false)]
        public Int64 AmenityDetailId { get; set; }
        [EditLink]
        public String AmenityDetailCd { get; set; }
        public String OfficeCd { get; set; }
        public String AmenityAmenityCd { get; set; }
        public Int32 SailDayFromQty { get; set; }
        public Int32 SailDayToQty { get; set; }
        public Int32 AmenityPtsQty { get; set; }
        public Int32 MinCabinQty { get; set; }
        public String ConditionDesc { get; set; }
        public String CommentTxt { get; set; }
        public DateTime CreatedDat { get; set; }
        public String CreatedByNam { get; set; }
        public DateTime ModifiedDat { get; set; }
        public String ModifiedByNam { get; set; }
    }
}