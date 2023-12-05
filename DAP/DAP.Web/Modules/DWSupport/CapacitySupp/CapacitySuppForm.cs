
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.CapacitySupp")]
    [BasedOnRow(typeof(Entities.CapacitySuppRow), CheckNames = true)]
    public class CapacitySuppForm
    {
        public String ShipCd { get; set; }
        public Int32 DoCapacity { get; set; }
        public Int32 CabinCapacity { get; set; }
        public DateTime EffectiveFromDt { get; set; }
        public DateTime EffectiveToDt { get; set; }
        public DateTime SailStartDate { get; set; }
        public DateTime SailEndDate { get; set; }
        [Visible(false)]
        public DateTime CreatedTs { get; set; }
        [Visible(false)]
        public String CreatedByNam { get; set; }
        [Visible(false)]
        public DateTime ModifiedTs { get; set; }
        [Visible(false)]
        public String ModifiedByNam { get; set; }
    }
}