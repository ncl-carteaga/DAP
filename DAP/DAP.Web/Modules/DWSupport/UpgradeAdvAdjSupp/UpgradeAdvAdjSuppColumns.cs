
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.UpgradeAdvAdjSupp")]
    [BasedOnRow(typeof(Entities.UpgradeAdvAdjSuppRow), CheckNames = true)]
    public class UpgradeAdvAdjSuppColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 UpgradeAdvAdjId { get; set; }
        public Decimal UpgradeAmountMin { get; set; }
        public Decimal UpgradeAmountMax { get; set; }
        public Decimal CommissionPercent { get; set; }
        public DateTime EffectiveFromDt { get; set; }
        public DateTime EffectiveToDt { get; set; }
        public DateTime CreatedTs { get; set; }
        [EditLink]
        public String CreatedByName { get; set; }
        public DateTime ModifiedTs { get; set; }
        public String ModifiedByNam { get; set; }
    }
}