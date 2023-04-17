
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.CruiseSegmentDaysOverride")]
    [BasedOnRow(typeof(Entities.CruiseSegmentDaysOverrideRow), CheckNames = true)]
    public class CruiseSegmentDaysOverrideColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CruiseSegmentDayOverrideId { get; set; }
        [EditLink]
        public String CruiseCd { get; set; }
        public String CompanyCd { get; set; }
        public Int32 CruiseDaysQty { get; set; }
        public Int32 CruiseSegmentDaysQty { get; set; }
        public DateTime EffectiveFrom { get; set; }
        public DateTime EffectiveTo { get; set; }
        public DateTime LoadDt { get; set; }
    }
}