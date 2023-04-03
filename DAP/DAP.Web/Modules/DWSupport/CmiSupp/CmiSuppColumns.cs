
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.CmiSupp")]
    [BasedOnRow(typeof(Entities.CmiSuppRow), CheckNames = true)]
    public class CmiSuppColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 CmiSurKey { get; set; }
        [EditLink]
        public String CmiTypeCd { get; set; }
        public Int32 SailId { get; set; }
        public Decimal CruiseRevAmt { get; set; }
        public Decimal NcfAmt { get; set; }
        public Decimal CommissionAmt { get; set; }
        public Decimal CmiAmenityCostAmt { get; set; }
        public Int32 AgencyId { get; set; }
        public DateTime ContractDat { get; set; }
        public Int32 CabinQty { get; set; }
        public Int32 PaxQty { get; set; }
        public String BookingCurrencyCd { get; set; }
        public DateTime CreatedTs { get; set; }
        public DateTime VoyageEndDate { get; set; }
        public DateTime VoyageStartDate { get; set; }
        public String CreatedByNam { get; set; }
        public String ModifiedByNam { get; set; }
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
        public String ShipCd { get; set; }
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