
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.FinPlannedCapacitySupp")]
    [BasedOnRow(typeof(Entities.FinPlannedCapacitySuppRow), CheckNames = true)]
    public class FinPlannedCapacitySuppForm
    {
        public String ShipCd { get; set; }
        public DateTime SailFromDat { get; set; }
        public DateTime SailToDat { get; set; }
        public Int32 FinancialCabinCapacityQty { get; set; }
        public Int32 FinancialGuestCapacityQty { get; set; }
        public String CapacityDesc { get; set; }
        [Visible(false)]
        public DateTime CreatedTs { get; set; }
        [Visible(false)]
        public String CreatedByNam { get; set; }
        [Visible(false)]
        public String ModifiedByNam { get; set; }
        [Visible(false)]
        public DateTime ModifiedTs { get; set; }
        public Int32 UnadjustedFinancialCabinCapacityQty { get; set; }
        public Int32 UnadjustedFinancialGuestCapacityQty { get; set; }
    }
}