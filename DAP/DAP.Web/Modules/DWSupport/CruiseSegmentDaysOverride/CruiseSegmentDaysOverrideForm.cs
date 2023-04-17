
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.CruiseSegmentDaysOverride")]
    [BasedOnRow(typeof(Entities.CruiseSegmentDaysOverrideRow), CheckNames = true)]
    public class CruiseSegmentDaysOverrideForm
    {
        public String CruiseCd { get; set; }
        public String CompanyCd { get; set; }
        public Int32 CruiseDaysQty { get; set; }
        public Int32 CruiseSegmentDaysQty { get; set; }
        public DateTime EffectiveFrom { get; set; }
        public DateTime EffectiveTo { get; set; }
        [Visible(false)]
        public DateTime LoadDt { get; set; }
    }
}