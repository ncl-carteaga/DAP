
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.UpgradeAdvAdjSupp")]
    [BasedOnRow(typeof(Entities.UpgradeAdvAdjSuppRow), CheckNames = true)]
    public class UpgradeAdvAdjSuppForm
    {
        public Decimal UpgradeAmountMin { get; set; }
        public Decimal UpgradeAmountMax { get; set; }
        public Decimal CommissionPercent { get; set; }
        public DateTime EffectiveFromDt { get; set; }
        public DateTime EffectiveToDt { get; set; }
        [Visible(false)]
        public DateTime CreatedTs { get; set; }
        [Visible(false)]
        public String CreatedByName { get; set; }
        [Visible(false)]
        public DateTime ModifiedTs { get; set; }
        [Visible(false)]
        public String ModifiedByNam { get; set; }
    }
}