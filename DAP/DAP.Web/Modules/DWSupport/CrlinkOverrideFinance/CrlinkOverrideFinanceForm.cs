
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.CrlinkOverrideFinance")]
    [BasedOnRow(typeof(Entities.CrlinkOverrideFinanceRow), CheckNames = true)]
    public class CrlinkOverrideFinanceForm
    {
        public String CruiseCd { get; set; }
        public String CruiseSegmentCd { get; set; }
        public String CompanyCd { get; set; }
        public DateTime EffectiveFrom { get; set; }
        public DateTime EffectiveTo { get; set; }
        [Visible(false)]
        public DateTime LoadDt { get; set; }
    }
}