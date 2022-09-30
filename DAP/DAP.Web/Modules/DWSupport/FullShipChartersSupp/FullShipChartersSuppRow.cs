
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[FULL_SHIP_CHARTERS_SUPP]")]
    [DisplayName("Full Ship Charters Supp"), InstanceName("Full Ship Charters Supp")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]
    public sealed class FullShipChartersSuppRow : Row, IIdRow, INameRow
    {
        [DisplayName("Ship Charter Sur Key"), Column("SHIP_CHARTER_SUR_KEY"), PrimaryKey]
        public Int32? ShipCharterSurKey
        {
            get { return Fields.ShipCharterSurKey[this]; }
            set { Fields.ShipCharterSurKey[this] = value; }
        }

        [DisplayName("Ship Cd"), Column("SHIP_CD"), Size(3), NotNull, QuickSearch]
        public String ShipCd
        {
            get { return Fields.ShipCd[this]; }
            set { Fields.ShipCd[this] = value; }
        }

        [DisplayName("Sail Dat"), Column("SAIL_DAT"), NotNull]
        public DateTime? SailDat
        {
            get { return Fields.SailDat[this]; }
            set { Fields.SailDat[this] = value; }
        }

        [DisplayName("Sail Id"), Column("SAIL_ID"), NotNull]
        public Int32? SailId
        {
            get { return Fields.SailId[this]; }
            set { Fields.SailId[this] = value; }
        }

        [DisplayName("Sail Day Qty"), Column("SAIL_DAY_QTY")]
        public Int32? SailDayQty
        {
            get { return Fields.SailDayQty[this]; }
            set { Fields.SailDayQty[this] = value; }
        }

        [DisplayName("Voyage Cd"), Column("VOYAGE_CD"), Size(50)]
        public String VoyageCd
        {
            get { return Fields.VoyageCd[this]; }
            set { Fields.VoyageCd[this] = value; }
        }

        [DisplayName("Agency Id"), Column("AGENCY_ID")]
        public Int32? AgencyId
        {
            get { return Fields.AgencyId[this]; }
            set { Fields.AgencyId[this] = value; }
        }

        [DisplayName("Charter Desc"), Column("CHARTER_DESC"), Size(100)]
        public String CharterDesc
        {
            get { return Fields.CharterDesc[this]; }
            set { Fields.CharterDesc[this] = value; }
        }

        [DisplayName("Guest Qty"), Column("GUEST_QTY")]
        public Int32? GuestQty
        {
            get { return Fields.GuestQty[this]; }
            set { Fields.GuestQty[this] = value; }
        }

        [DisplayName("Charter Rev Amt"), Column("CHARTER_REV_AMT")]
        public Int32? CharterRevAmt
        {
            get { return Fields.CharterRevAmt[this]; }
            set { Fields.CharterRevAmt[this] = value; }
        }

        [DisplayName("Charter Comm Amt"), Column("CHARTER_COMM_AMT")]
        public Int32? CharterCommAmt
        {
            get { return Fields.CharterCommAmt[this]; }
            set { Fields.CharterCommAmt[this] = value; }
        }

        [DisplayName("Rm Contract Adj Ntr No Svc Amt"), Column("RM_CONTRACT_ADJ_NTR_NO_SVC_AMT"), Size(30)]
        public String RmContractAdjNtrNoSvcAmt
        {
            get { return Fields.RmContractAdjNtrNoSvcAmt[this]; }
            set { Fields.RmContractAdjNtrNoSvcAmt[this] = value; }
        }

        [DisplayName("Office Cd"), Column("OFFICE_CD"), Size(15)]
        public String OfficeCd
        {
            get { return Fields.OfficeCd[this]; }
            set { Fields.OfficeCd[this] = value; }
        }

        [DisplayName("Contract Dat"), Column("CONTRACT_DAT")]
        public DateTime? ContractDat
        {
            get { return Fields.ContractDat[this]; }
            set { Fields.ContractDat[this] = value; }
        }

        [DisplayName("Rm Final Guest Qty"), Column("RM_FINAL_GUEST_QTY")]
        public Int32? RmFinalGuestQty
        {
            get { return Fields.RmFinalGuestQty[this]; }
            set { Fields.RmFinalGuestQty[this] = value; }
        }

        [DisplayName("Rm Final Adj Ntr Amt"), Column("RM_FINAL_ADJ_NTR_AMT")]
        public Int32? RmFinalAdjNtrAmt
        {
            get { return Fields.RmFinalAdjNtrAmt[this]; }
            set { Fields.RmFinalAdjNtrAmt[this] = value; }
        }

        [DisplayName("Rm Final Adj Ntr No Svc Amt"), Column("RM_FINAL_ADJ_NTR_NO_SVC_AMT")]
        public Int32? RmFinalAdjNtrNoSvcAmt
        {
            get { return Fields.RmFinalAdjNtrNoSvcAmt[this]; }
            set { Fields.RmFinalAdjNtrNoSvcAmt[this] = value; }
        }

        [DisplayName("District Nbr"), Column("DISTRICT_NBR"), Size(15)]
        public String DistrictNbr
        {
            get { return Fields.DistrictNbr[this]; }
            set { Fields.DistrictNbr[this] = value; }
        }

        [DisplayName("Contract Price Amt"), Column("CONTRACT_PRICE_AMT")]
        public Int32? ContractPriceAmt
        {
            get { return Fields.ContractPriceAmt[this]; }
            set { Fields.ContractPriceAmt[this] = value; }
        }

        [DisplayName("Deposit Dat"), Column("DEPOSIT_DAT")]
        public DateTime? DepositDat
        {
            get { return Fields.DepositDat[this]; }
            set { Fields.DepositDat[this] = value; }
        }

        [DisplayName("Rm Ncf Amt"), Column("RM_NCF_AMT")]
        public Int32? RmNcfAmt
        {
            get { return Fields.RmNcfAmt[this]; }
            set { Fields.RmNcfAmt[this] = value; }
        }

        [Updatable(false), Insertable(false)]
        [DisplayName("Created By Nam"), Column("CREATED_BY_NAM"), Size(50), NotNull]
        public String CreatedByNam
        {
            get { return Fields.CreatedByNam[this]; }
            set { Fields.CreatedByNam[this] = value; }
        }

        [Updatable(false), Insertable(false)]
        [DisplayName("Created Ts"), Column("CREATED_TS"), NotNull]
        public DateTime? CreatedTs
        {
            get { return Fields.CreatedTs[this]; }
            set { Fields.CreatedTs[this] = value; }
        }

        [Updatable(false), Insertable(false)]
        [DisplayName("Modified By Nam"), Column("MODIFIED_BY_NAM"), Size(50)]
        public String ModifiedByNam
        {
            get { return Fields.ModifiedByNam[this]; }
            set { Fields.ModifiedByNam[this] = value; }
        }

        [Updatable(false), Insertable(false)]
        [DisplayName("Modified Ts"), Column("MODIFIED_TS"), NotNull]
        public DateTime? ModifiedTs
        {
            get { return Fields.ModifiedTs[this]; }
            set { Fields.ModifiedTs[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ShipCharterSurKey; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ShipCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FullShipChartersSuppRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ShipCharterSurKey;
            public StringField ShipCd;
            public DateTimeField SailDat;
            public Int32Field SailId;
            public Int32Field SailDayQty;
            public StringField VoyageCd;
            public Int32Field AgencyId;
            public StringField CharterDesc;
            public Int32Field GuestQty;
            public Int32Field CharterRevAmt;
            public Int32Field CharterCommAmt;
            public StringField RmContractAdjNtrNoSvcAmt;
            public StringField OfficeCd;
            public DateTimeField ContractDat;
            public Int32Field RmFinalGuestQty;
            public Int32Field RmFinalAdjNtrAmt;
            public Int32Field RmFinalAdjNtrNoSvcAmt;
            public StringField DistrictNbr;
            public Int32Field ContractPriceAmt;
            public DateTimeField DepositDat;
            public Int32Field RmNcfAmt;
            public StringField CreatedByNam;
            public DateTimeField CreatedTs;
            public StringField ModifiedByNam;
            public DateTimeField ModifiedTs;
        }
    }
}
