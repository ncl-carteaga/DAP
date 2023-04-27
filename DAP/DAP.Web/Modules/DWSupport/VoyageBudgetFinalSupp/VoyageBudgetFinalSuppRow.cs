
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[VOYAGE_BUDGET_FINAL_SUPP]")]
    [DisplayName("Voyage Budget Final Supp"), InstanceName("Voyage Budget Final Supp")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]
    public sealed class VoyageBudgetFinalSuppRow : Row, IIdRow, INameRow
    {
        [DisplayName("Budget Final Id"), Column("BUDGET_FINAL_ID"), Identity, Visible(false)]
        public Int32? BudgetFinalId
        {
            get { return Fields.BudgetFinalId[this]; }
            set { Fields.BudgetFinalId[this] = value; }
        }

        [DisplayName("Ship Cd"), Column("SHIP_CD"), Size(3), NotNull, QuickFilter]
        public String ShipCd
        {
            get { return Fields.ShipCd[this]; }
            set { Fields.ShipCd[this] = value; }
        }

        [DisplayName("Voyage Cd"), Column("VOYAGE_CD"), Size(50), NotNull, QuickSearch]
        public String VoyageCd
        {
            get { return Fields.VoyageCd[this]; }
            set { Fields.VoyageCd[this] = value; }
        }

        [DisplayName("Sales Channel Desc"), Column("SALES_CHANNEL_DESC"), Size(800)]
        public String SalesChannelDesc
        {
            get { return Fields.SalesChannelDesc[this]; }
            set { Fields.SalesChannelDesc[this] = value; }
        }

        [DisplayName("Year Nbr"), Column("YEAR_NBR")]
        public Int32? YearNbr
        {
            get { return Fields.YearNbr[this]; }
            set { Fields.YearNbr[this] = value; }
        }

        [DisplayName("Month Nbr"), Column("MONTH_NBR")]
        public Int32? MonthNbr
        {
            get { return Fields.MonthNbr[this]; }
            set { Fields.MonthNbr[this] = value; }
        }

        [DisplayName("Operational Ntr Amt"), Column("OPERATIONAL_NTR_AMT")]
        public Double? OperationalNtrAmt
        {
            get { return Fields.OperationalNtrAmt[this]; }
            set { Fields.OperationalNtrAmt[this] = value; }
        }

        [DisplayName("Passenger Count Qty"), Column("PASSENGER_COUNT_QTY")]
        public Double? PassengerCountQty
        {
            get { return Fields.PassengerCountQty[this]; }
            set { Fields.PassengerCountQty[this] = value; }
        }

        [DisplayName("Passenger Days Qty"), Column("PASSENGER_DAYS_QTY")]
        public Double? PassengerDaysQty
        {
            get { return Fields.PassengerDaysQty[this]; }
            set { Fields.PassengerDaysQty[this] = value; }
        }

        [DisplayName("Capacity Days Qty"), Column("CAPACITY_DAYS_QTY")]
        public Double? CapacityDaysQty
        {
            get { return Fields.CapacityDaysQty[this]; }
            set { Fields.CapacityDaysQty[this] = value; }
        }

        [DisplayName("Cabin Days Qty"), Column("CABIN_DAYS_QTY")]
        public Double? CabinDaysQty
        {
            get { return Fields.CabinDaysQty[this]; }
            set { Fields.CabinDaysQty[this] = value; }
        }

        [DisplayName("Budget Type Cd"), Column("BUDGET_TYPE_CD"), Size(50)]
        public String BudgetTypeCd
        {
            get { return Fields.BudgetTypeCd[this]; }
            set { Fields.BudgetTypeCd[this] = value; }
        }

        [DisplayName("Charter Flag Cd"), Column("CHARTER_FLAG_CD"), Size(2)]
        public String CharterFlagCd
        {
            get { return Fields.CharterFlagCd[this]; }
            set { Fields.CharterFlagCd[this] = value; }
        }

        [DisplayName("Bk Cabin Days Qty"), Column("BK_CABIN_DAYS_QTY")]
        public Double? BkCabinDaysQty
        {
            get { return Fields.BkCabinDaysQty[this]; }
            set { Fields.BkCabinDaysQty[this] = value; }
        }

        [DisplayName("Bk Cabin Qty"), Column("BK_CABIN_QTY")]
        public Double? BkCabinQty
        {
            get { return Fields.BkCabinQty[this]; }
            set { Fields.BkCabinQty[this] = value; }
        }

        [DisplayName("Created Ts"), Column("CREATED_TS"), NotNull, Updatable(false),Insertable(false)]
        public DateTime? CreatedTs
        {
            get { return Fields.CreatedTs[this]; }
            set { Fields.CreatedTs[this] = value; }
        }

        [DisplayName("Created By Nam"), Column("CREATED_BY_NAM"), Size(50), NotNull, Updatable(false), Insertable(false)]
        public String CreatedByNam
        {
            get { return Fields.CreatedByNam[this]; }
            set { Fields.CreatedByNam[this] = value; }
        }

        [DisplayName("Modified Ts"), Column("MODIFIED_TS"), NotNull, Updatable(false), Insertable(false)]
        public DateTime? ModifiedTs
        {
            get { return Fields.ModifiedTs[this]; }
            set { Fields.ModifiedTs[this] = value; }
        }

        [DisplayName("Modified By Nam"), Column("MODIFIED_BY_NAM"), Size(50), NotNull, Updatable(false), Insertable(false)]
        public String ModifiedByNam
        {
            get { return Fields.ModifiedByNam[this]; }
            set { Fields.ModifiedByNam[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.BudgetFinalId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ShipCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public VoyageBudgetFinalSuppRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field BudgetFinalId;
            public StringField ShipCd;
            public StringField VoyageCd;
            public StringField SalesChannelDesc;
            public Int32Field YearNbr;
            public Int32Field MonthNbr;
            public DoubleField OperationalNtrAmt;
            public DoubleField PassengerCountQty;
            public DoubleField PassengerDaysQty;
            public DoubleField CapacityDaysQty;
            public DoubleField CabinDaysQty;
            public StringField BudgetTypeCd;
            public StringField CharterFlagCd;
            public DoubleField BkCabinDaysQty;
            public DoubleField BkCabinQty;
            public DateTimeField CreatedTs;
            public StringField CreatedByNam;
            public DateTimeField ModifiedTs;
            public StringField ModifiedByNam;
        }
    }
}
