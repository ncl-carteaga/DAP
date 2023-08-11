
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.CappingAdjustmentsSupp")]
    [BasedOnRow(typeof(Entities.CappingAdjustmentsSuppRow), CheckNames = true)]
    public class CappingAdjustmentsSuppForm
    {
        public String CompanyCd { get; set; }
        public String ShipCd { get; set; }
        public String CruiseCd { get; set; }
        public Int32 CappedCabinCapacity { get; set; }
        public Int32 SingleCabinCapacity { get; set; }
        public DateTime EffectiveFromDate { get; set; }
        public DateTime EffectiveToDate { get; set; }
        [Visible(false)]
        public DateTime ModifiedTs { get; set; }
        [Visible(false)]
        public String ModifiedByNam { get; set; }
    }
}