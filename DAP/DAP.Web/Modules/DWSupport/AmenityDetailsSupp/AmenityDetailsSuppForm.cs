
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.AmenityDetailsSupp")]
    [BasedOnRow(typeof(Entities.AmenityDetailsSuppRow), CheckNames = true)]
    public class AmenityDetailsSuppForm
    {
        public Int64 AmenityId { get; set; }
        public String AmenityDetailCd { get; set; }
        public String OfficeCd { get; set; }
        [HalfWidth(UntilNext = true)]
        public Int32 SailDayFromQty { get; set; }
        public Int32 SailDayToQty { get; set; }
        public Int32 AmenityPtsQty { get; set; }
        public Int32 MinCabinQty { get; set; }
        [FullWidth, TextAreaEditor(Rows = 3)]
        public String ConditionDesc { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String CommentTxt { get; set; }
        [Visible(false)]
        public DateTime CreatedDat { get; set; }
        [Visible(false)]
        public String CreatedByNam { get; set; }
        [Visible(false)]
        public DateTime ModifiedDat { get; set; }
        [Visible(false)]
        public String ModifiedByNam { get; set; }
    }
}