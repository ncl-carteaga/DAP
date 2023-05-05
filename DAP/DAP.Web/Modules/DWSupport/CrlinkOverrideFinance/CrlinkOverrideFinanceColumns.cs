
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.CrlinkOverrideFinance")]
    [BasedOnRow(typeof(Entities.CrlinkOverrideFinanceRow), CheckNames = true)]
    public class CrlinkOverrideFinanceColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CrlinkOverrideId { get; set; }
        [EditLink]
        public String CruiseCd { get; set; }
        [EditLink]
        public String CruiseSegmentCd { get; set; }
        public String CompanyCd { get; set; }
        public DateTime EffectiveFrom { get; set; }
        public DateTime EffectiveTo { get; set; }
        public DateTime LoadDt { get; set; }
    }
}