
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[FIN_PLANNED_CAPACITY_SUPP]")]
    [DisplayName("Fin Planned Capacity Supp"), InstanceName("Fin Planned Capacity Supp")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    public sealed class FinPlannedCapacitySuppRow : Row, IIdRow, INameRow
    {
        [DisplayName("Fin Planned Capacity Sur Key"), Column("FIN_PLANNED_CAPACITY_SUR_KEY"), Identity]
        public Int64? FinPlannedCapacitySurKey
        {
            get { return Fields.FinPlannedCapacitySurKey[this]; }
            set { Fields.FinPlannedCapacitySurKey[this] = value; }
        }

        [DisplayName("Ship Cd"), Column("SHIP_CD"), Size(3), QuickSearch]
        public String ShipCd
        {
            get { return Fields.ShipCd[this]; }
            set { Fields.ShipCd[this] = value; }
        }

        [DisplayName("Sail From Dat"), Column("SAIL_FROM_DAT"), NotNull]
        public DateTime? SailFromDat
        {
            get { return Fields.SailFromDat[this]; }
            set { Fields.SailFromDat[this] = value; }
        }

        [DisplayName("Sail To Dat"), Column("SAIL_TO_DAT"), NotNull]
        public DateTime? SailToDat
        {
            get { return Fields.SailToDat[this]; }
            set { Fields.SailToDat[this] = value; }
        }

        [DisplayName("Financial Cabin Capacity Qty"), Column("FINANCIAL_CABIN_CAPACITY_QTY")]
        public Int32? FinancialCabinCapacityQty
        {
            get { return Fields.FinancialCabinCapacityQty[this]; }
            set { Fields.FinancialCabinCapacityQty[this] = value; }
        }

        [DisplayName("Financial Guest Capacity Qty"), Column("FINANCIAL_GUEST_CAPACITY_QTY")]
        public Int32? FinancialGuestCapacityQty
        {
            get { return Fields.FinancialGuestCapacityQty[this]; }
            set { Fields.FinancialGuestCapacityQty[this] = value; }
        }

        [DisplayName("Capacity Desc"), Column("CAPACITY_DESC"), Size(400)]
        public String CapacityDesc
        {
            get { return Fields.CapacityDesc[this]; }
            set { Fields.CapacityDesc[this] = value; }
        }

        [DisplayName("Created Ts"), Column("CREATED_TS")]
        public DateTime? CreatedTs
        {
            get { return Fields.CreatedTs[this]; }
            set { Fields.CreatedTs[this] = value; }
        }

        [DisplayName("Created By Nam"), Column("CREATED_BY_NAM")]
        public String CreatedByNam
        {
            get { return Fields.CreatedByNam[this]; }
            set { Fields.CreatedByNam[this] = value; }
        }

        [DisplayName("Modified By Nam"), Column("MODIFIED_BY_NAM")]
        public String ModifiedByNam
        {
            get { return Fields.ModifiedByNam[this]; }
            set { Fields.ModifiedByNam[this] = value; }
        }

        [DisplayName("Modified Ts"), Column("MODIFIED_TS")]
        public DateTime? ModifiedTs
        {
            get { return Fields.ModifiedTs[this]; }
            set { Fields.ModifiedTs[this] = value; }
        }

        [DisplayName("Unadjusted Financial Cabin Capacity Qty"), Column("UNADJUSTED_FINANCIAL_CABIN_CAPACITY_QTY")]
        public Int32? UnadjustedFinancialCabinCapacityQty
        {
            get { return Fields.UnadjustedFinancialCabinCapacityQty[this]; }
            set { Fields.UnadjustedFinancialCabinCapacityQty[this] = value; }
        }

        [DisplayName("Unadjusted Financial Guest Capacity Qty"), Column("UNADJUSTED_FINANCIAL_GUEST_CAPACITY_QTY")]
        public Int32? UnadjustedFinancialGuestCapacityQty
        {
            get { return Fields.UnadjustedFinancialGuestCapacityQty[this]; }
            set { Fields.UnadjustedFinancialGuestCapacityQty[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.FinPlannedCapacitySurKey; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ShipCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FinPlannedCapacitySuppRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field FinPlannedCapacitySurKey;
            public StringField ShipCd;
            public DateTimeField SailFromDat;
            public DateTimeField SailToDat;
            public Int32Field FinancialCabinCapacityQty;
            public Int32Field FinancialGuestCapacityQty;
            public StringField CapacityDesc;
            public DateTimeField CreatedTs;
            public StringField CreatedByNam;
            public StringField ModifiedByNam;
            public DateTimeField ModifiedTs;
            public Int32Field UnadjustedFinancialCabinCapacityQty;
            public Int32Field UnadjustedFinancialGuestCapacityQty;
        }
    }
}
