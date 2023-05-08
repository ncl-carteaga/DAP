
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[CMI_SUPP]")]
    [DisplayName("Cmi Supp"), InstanceName("Cmi Supp")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]
    public sealed class CmiSuppRow : Row, IIdRow, INameRow
    {
        [DisplayName("Cmi Sur Key"), Column("CMI_SUR_KEY"), Identity]
        public Int64? CmiSurKey
        {
            get { return Fields.CmiSurKey[this]; }
            set { Fields.CmiSurKey[this] = value; }
        }

        [DisplayName("Cmi Type Cd"), Column("CMI_TYPE_CD"), Size(50), NotNull, QuickSearch]
        public String CmiTypeCd
        {
            get { return Fields.CmiTypeCd[this]; }
            set { Fields.CmiTypeCd[this] = value; }
        }

        [DisplayName("Sail Id"), Column("SAIL_ID"), NotNull]
        public Int32? SailId
        {
            get { return Fields.SailId[this]; }
            set { Fields.SailId[this] = value; }
        }

        [DisplayName("Cruise Rev Amt"), Column("CRUISE_REV_AMT"), Size(38), Scale(4)]
        public Decimal? CruiseRevAmt
        {
            get { return Fields.CruiseRevAmt[this]; }
            set { Fields.CruiseRevAmt[this] = value; }
        }

        [DisplayName("Ncf Amt"), Column("NCF_AMT"), Size(38), Scale(4)]
        public Decimal? NcfAmt
        {
            get { return Fields.NcfAmt[this]; }
            set { Fields.NcfAmt[this] = value; }
        }

        [DisplayName("Commission Amt"), Column("COMMISSION_AMT"), Size(38), Scale(4)]
        public Decimal? CommissionAmt
        {
            get { return Fields.CommissionAmt[this]; }
            set { Fields.CommissionAmt[this] = value; }
        }

        [DisplayName("Cmi Amenity Cost Amt"), Column("CMI_AMENITY_COST_AMT"), Size(38), Scale(4)]
        public Decimal? CmiAmenityCostAmt
        {
            get { return Fields.CmiAmenityCostAmt[this]; }
            set { Fields.CmiAmenityCostAmt[this] = value; }
        }

        [DisplayName("Agency Id"), Column("AGENCY_ID"), NotNull]
        public Int32? AgencyId
        {
            get { return Fields.AgencyId[this]; }
            set { Fields.AgencyId[this] = value; }
        }

        [DisplayName("Contract Dat"), Column("CONTRACT_DAT")]
        public DateTime? ContractDat
        {
            get { return Fields.ContractDat[this]; }
            set { Fields.ContractDat[this] = value; }
        }

        [DisplayName("Cabin Qty"), Column("CABIN_QTY")]
        public Int32? CabinQty
        {
            get { return Fields.CabinQty[this]; }
            set { Fields.CabinQty[this] = value; }
        }

        [DisplayName("Pax Qty"), Column("PAX_QTY")]
        public Int32? PaxQty
        {
            get { return Fields.PaxQty[this]; }
            set { Fields.PaxQty[this] = value; }
        }

        [DisplayName("Booking Currency Cd"), Column("BOOKING_CURRENCY_CD"), Size(5)]
        public String BookingCurrencyCd
        {
            get { return Fields.BookingCurrencyCd[this]; }
            set { Fields.BookingCurrencyCd[this] = value; }
        }

        [DisplayName("Created Ts"), Column("CREATED_TS"), NotNull]
        public DateTime? CreatedTs
        {
            get { return Fields.CreatedTs[this]; }
            set { Fields.CreatedTs[this] = value; }
        }

        [DisplayName("Voyage Start Date"), Column("VOYAGE_START_DATE"), NotNull]
        public DateTime? VoyageStartDate
        {
            get { return Fields.VoyageStartDate[this]; }
            set { Fields.VoyageStartDate[this] = value; }
        }

        [DisplayName("Voyage End Date"), Column("VOYAGE_END_DATE"), NotNull, DefaultValue("12-30-9999")]
        public DateTime? VoyageEndDate
        {
            get { return Fields.VoyageEndDate[this]; }
            set { Fields.VoyageEndDate[this] = value; }
        }

        [DisplayName("Created By Nam"), Column("CREATED_BY_NAM"), Size(50), NotNull]
        public String CreatedByNam
        {
            get { return Fields.CreatedByNam[this]; }
            set { Fields.CreatedByNam[this] = value; }
        }

        [DisplayName("Modified By Nam"), Column("MODIFIED_BY_NAM"), Size(50)]
        public String ModifiedByNam
        {
            get { return Fields.ModifiedByNam[this]; }
            set { Fields.ModifiedByNam[this] = value; }
        }

        [DisplayName("Modified Ts"), Column("MODIFIED_TS"), NotNull]
        public DateTime? ModifiedTs
        {
            get { return Fields.ModifiedTs[this]; }
            set { Fields.ModifiedTs[this] = value; }
        }

        [DisplayName("Cmi Sub Type Cd"), Column("CMI_SUB_TYPE_CD"), Size(50)]
        public String CmiSubTypeCd
        {
            get { return Fields.CmiSubTypeCd[this]; }
            set { Fields.CmiSubTypeCd[this] = value; }
        }

        [DisplayName("Cmi Sub Type2 Cd"), Column("CMI_SUB_TYPE2_CD"), Size(50)]
        public String CmiSubType2Cd
        {
            get { return Fields.CmiSubType2Cd[this]; }
            set { Fields.CmiSubType2Cd[this] = value; }
        }

        [DisplayName("Voyage Cd"), Column("VOYAGE_CD"), Size(25)]
        public String VoyageCd
        {
            get { return Fields.VoyageCd[this]; }
            set { Fields.VoyageCd[this] = value; }
        }

        [DisplayName("Sm Cabin Fare Amt"), Column("SM_CABIN_FARE_AMT"), Size(38), Scale(4), DecimalEditor(AllowNegatives = true)]
        public Decimal? SmCabinFareAmt
        {
            get { return Fields.SmCabinFareAmt[this]; }
            set { Fields.SmCabinFareAmt[this] = value; }
        }

        [DisplayName("Sm Cabin Fare Nonrev Amt"), Column("SM_CABIN_FARE_NONREV_AMT"), Size(38), Scale(4), DecimalEditor(AllowNegatives = true)]
        public Decimal? SmCabinFareNonrevAmt
        {
            get { return Fields.SmCabinFareNonrevAmt[this]; }
            set { Fields.SmCabinFareNonrevAmt[this] = value; }
        }

        [DisplayName("Sm Excess Ticketing Amt"), Column("SM_EXCESS_TICKETING_AMT"), Size(38), Scale(4), DecimalEditor(AllowNegatives = true)]
        public Decimal? SmExcessTicketingAmt
        {
            get { return Fields.SmExcessTicketingAmt[this]; }
            set { Fields.SmExcessTicketingAmt[this] = value; }
        }

        [DisplayName("Sm Cruise Disc Amt"), Column("SM_CRUISE_DISC_AMT"), Size(38), Scale(4), DecimalEditor(AllowNegatives = true)]
        public Decimal? SmCruiseDiscAmt
        {
            get { return Fields.SmCruiseDiscAmt[this]; }
            set { Fields.SmCruiseDiscAmt[this] = value; }
        }

        [DisplayName("Sm Cost Of Sales Amt"), Column("SM_COST_OF_SALES_AMT"), Size(38), Scale(4), DecimalEditor(AllowNegatives = true)]
        public Decimal? SmCostOfSalesAmt
        {
            get { return Fields.SmCostOfSalesAmt[this]; }
            set { Fields.SmCostOfSalesAmt[this] = value; }
        }

        [DisplayName("Sm Guest Fees Grats Expense Amt"), Column("SM_GUEST_FEES_GRATS_EXPENSE_AMT"), Size(38), Scale(4), DecimalEditor(AllowNegatives = true)]
        public Decimal? SmGuestFeesGratsExpenseAmt
        {
            get { return Fields.SmGuestFeesGratsExpenseAmt[this]; }
            set { Fields.SmGuestFeesGratsExpenseAmt[this] = value; }
        }

        [DisplayName("Sm Credit Card Cost Amt"), Column("SM_CREDIT_CARD_COST_AMT"), Size(38), Scale(4), DecimalEditor(AllowNegatives = true)]
        public Decimal? SmCreditCardCostAmt
        {
            get { return Fields.SmCreditCardCostAmt[this]; }
            set { Fields.SmCreditCardCostAmt[this] = value; }
        }

        [DisplayName("Ship Cd"), Column("SHIP_CD"), Size(3), NotNull, LookupEditor(typeof(ShipRow))]
        public String ShipCd
        {
            get { return Fields.ShipCd[this]; }
            set { Fields.ShipCd[this] = value; }
        }

        [DisplayName("Sail Dat"), Column("SAIL_DAT")]
        public DateTime? SailDat
        {
            get { return Fields.SailDat[this]; }
            set { Fields.SailDat[this] = value; }
        }

        [DisplayName("Sail Day Qty"), Column("SAIL_DAY_QTY")]
        public Int32? SailDayQty
        {
            get { return Fields.SailDayQty[this]; }
            set { Fields.SailDayQty[this] = value; }
        }

        [DisplayName("Charter Desc"), Column("CHARTER_DESC"), Size(100)]
        public String CharterDesc
        {
            get { return Fields.CharterDesc[this]; }
            set { Fields.CharterDesc[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.CmiSurKey; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CmiTypeCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CmiSuppRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field CmiSurKey;
            public StringField CmiTypeCd;
            public Int32Field SailId;
            public DecimalField CruiseRevAmt;
            public DecimalField NcfAmt;
            public DecimalField CommissionAmt;
            public DecimalField CmiAmenityCostAmt;
            public Int32Field AgencyId;
            public DateTimeField ContractDat;
            public Int32Field CabinQty;
            public Int32Field PaxQty;
            public StringField BookingCurrencyCd;
            public DateTimeField CreatedTs;
            public DateTimeField VoyageStartDate;
            public DateTimeField VoyageEndDate;
            public StringField CreatedByNam;
            public StringField ModifiedByNam;
            public DateTimeField ModifiedTs;
            public StringField CmiSubTypeCd;
            public StringField CmiSubType2Cd;
            public StringField VoyageCd;
            public DecimalField SmCabinFareAmt;
            public DecimalField SmCabinFareNonrevAmt;
            public DecimalField SmExcessTicketingAmt;
            public DecimalField SmCruiseDiscAmt;
            public DecimalField SmCostOfSalesAmt;
            public DecimalField SmGuestFeesGratsExpenseAmt;
            public DecimalField SmCreditCardCostAmt;
            public StringField ShipCd;
            public DateTimeField SailDat;
            public Int32Field SailDayQty;
            public StringField CharterDesc;
            public StringField RmContractAdjNtrNoSvcAmt;
            public StringField OfficeCd;
            public Int32Field RmFinalGuestQty;
            public Int32Field RmFinalAdjNtrAmt;
            public Int32Field RmFinalAdjNtrNoSvcAmt;
            public StringField DistrictNbr;
            public Int32Field ContractPriceAmt;
            public DateTimeField DepositDat;
        }
    }
}
