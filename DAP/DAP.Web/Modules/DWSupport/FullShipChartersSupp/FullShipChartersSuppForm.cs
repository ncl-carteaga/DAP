
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.FullShipChartersSupp")]
    [BasedOnRow(typeof(Entities.FullShipChartersSuppRow), CheckNames = true)]
    public class FullShipChartersSuppForm
    {
        public String ShipCd { get; set; }
        public DateTime SailDat { get; set; }
        public Int32 SailId { get; set; }
        public Int32 SailDayQty { get; set; }
        public String VoyageCd { get; set; }
        public Int32 AgencyId { get; set; }
        public String CharterDesc { get; set; }
        public Int32 GuestQty { get; set; }
        public Int32 CharterRevAmt { get; set; }
        public Int32 CharterCommAmt { get; set; }
        public String RmContractAdjNtrNoSvcAmt { get; set; }
        public String OfficeCd { get; set; }
        public DateTime ContractDat { get; set; }
        public Int32 RmFinalGuestQty { get; set; }
        public Int32 RmFinalAdjNtrAmt { get; set; }
        public Int32 RmFinalAdjNtrNoSvcAmt { get; set; }
        public String DistrictNbr { get; set; }
        public Int32 ContractPriceAmt { get; set; }
        public DateTime DepositDat { get; set; }
        public Int32 RmNcfAmt { get; set; }
        [Visible(false)]
        public String CreatedByNam { get; set; }
        [Visible(false)]
        public DateTime CreatedTs { get; set; }
        [Visible(false)]
        public String ModifiedByNam { get; set; }
        [Visible(false)]
        public DateTime ModifiedTs { get; set; }
    }
}