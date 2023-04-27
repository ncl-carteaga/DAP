
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.VoyageBudgetFinalSupp")]
    [BasedOnRow(typeof(Entities.VoyageBudgetFinalSuppRow), CheckNames = true)]
    public class VoyageBudgetFinalSuppForm
    {
        public String ShipCd { get; set; }
        public String VoyageCd { get; set; }
        public String SalesChannelDesc { get; set; }
        public Int32 YearNbr { get; set; }
        public Int32 MonthNbr { get; set; }
        public Double OperationalNtrAmt { get; set; }
        public Double PassengerCountQty { get; set; }
        public Double PassengerDaysQty { get; set; }
        public Double CapacityDaysQty { get; set; }
        public Double CabinDaysQty { get; set; }
        public String BudgetTypeCd { get; set; }
        public String CharterFlagCd { get; set; }
        public Double BkCabinDaysQty { get; set; }
        public Double BkCabinQty { get; set; }
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