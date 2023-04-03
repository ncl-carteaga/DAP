
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.CmiSupp")]
    [BasedOnRow(typeof(Entities.CmiSuppRow), CheckNames = true)]
    public class CmiSuppForm
    {
        [Tab("Tab 1")]
        public String ShipCd { get; set; }
        public Int32 SailId { get; set; }
        public Int32 AgencyId { get; set; }
        public String CmiTypeCd { get; set; }
        public Decimal CruiseRevAmt { get; set; }
        public Decimal NcfAmt { get; set; }
        public Decimal CommissionAmt { get; set; }
        public Decimal CmiAmenityCostAmt { get; set; }
        public DateTime ContractDat { get; set; }
        public Int32 CabinQty { get; set; }
        public Int32 PaxQty { get; set; }
        public DateTime VoyageEndDate { get; set; }
        public DateTime VoyageStartDate { get; set; }
        [Tab("Tab 2")]
        public String BookingCurrencyCd { get; set; }
        [Visible(false)]
        public DateTime CreatedTs { get; set; }
        [Visible(false)]
        public String CreatedByNam { get; set; }
        [Visible(false)]
        public String ModifiedByNam { get; set; }
        [Visible(false)]
        public DateTime ModifiedTs { get; set; }
        public String CmiSubTypeCd { get; set; }
        public String CmiSubType2Cd { get; set; }
        public String VoyageCd { get; set; }
        public Decimal SmCabinFareAmt { get; set; }
        public Decimal SmCabinFareNonrevAmt { get; set; }
        public Decimal SmExcessTicketingAmt { get; set; }
        public Decimal SmCruiseDiscAmt { get; set; }
        public Decimal SmCostOfSalesAmt { get; set; }
        public Decimal SmGuestFeesGratsExpenseAmt { get; set; }
        public Decimal SmCreditCardCostAmt { get; set; }
        [Tab("Tab 3")]
        public DateTime SailDat { get; set; }
        public Int32 SailDayQty { get; set; }
        public String CharterDesc { get; set; }
        public String RmContractAdjNtrNoSvcAmt { get; set; }
        public String OfficeCd { get; set; }
        public Int32 RmFinalGuestQty { get; set; }
        public Int32 RmFinalAdjNtrAmt { get; set; }
        public Int32 RmFinalAdjNtrNoSvcAmt { get; set; }
        public String DistrictNbr { get; set; }
        public Int32 ContractPriceAmt { get; set; }
        public DateTime DepositDat { get; set; }
    }
}