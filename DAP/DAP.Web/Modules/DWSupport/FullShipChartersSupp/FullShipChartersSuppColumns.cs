
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.FullShipChartersSupp")]
    [BasedOnRow(typeof(Entities.FullShipChartersSuppRow), CheckNames = true)]
    public class FullShipChartersSuppColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ShipCharterSurKey { get; set; }
        [EditLink]
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
        public String CreatedByNam { get; set; }
        public DateTime CreatedTs { get; set; }
        public String ModifiedByNam { get; set; }
        public DateTime ModifiedTs { get; set; }
    }
}