
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[CAPPING_ADJUSTMENTS_SUPP]")]
    [DisplayName("Capping Adjustments Supp"), InstanceName("Capping Adjustments Supp")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]
    public sealed class CappingAdjustmentsSuppRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Company Cd"), Column("COMPANY_CD"), Size(3), QuickSearch, QuickFilter, PCHODS.CompanyEditor]
        public String CompanyCd
        {
            get { return Fields.CompanyCd[this]; }
            set { Fields.CompanyCd[this] = value; }
        }

        [DisplayName("Ship Cd"), Column("SHIP_CD"), Size(50), NotNull, LookupEditor(typeof(ShipRow))]
        public String ShipCd
        {
            get { return Fields.ShipCd[this]; }
            set { Fields.ShipCd[this] = value; }
        }

        [DisplayName("Cruise Cd"), Column("CRUISE_CD"), Size(50), QuickSearch]
        public String CruiseCd
        {
            get { return Fields.CruiseCd[this]; }
            set { Fields.CruiseCd[this] = value; }
        }

        [DisplayName("Capped Cabin Capacity"), Column("CAPPED_CABIN_CAPACITY")]
        public Int32? CappedCabinCapacity
        {
            get { return Fields.CappedCabinCapacity[this]; }
            set { Fields.CappedCabinCapacity[this] = value; }
        }

        [DisplayName("Single Cabin Capacity"), Column("SINGLE_CABIN_CAPACITY")]
        public Int32? SingleCabinCapacity
        {
            get { return Fields.SingleCabinCapacity[this]; }
            set { Fields.SingleCabinCapacity[this] = value; }
        }

        [DisplayName("Effective From Date"), Column("EFFECTIVE_FROM_DATE"), NotNull]
        public DateTime? EffectiveFromDate
        {
            get { return Fields.EffectiveFromDate[this]; }
            set { Fields.EffectiveFromDate[this] = value; }
        }

        [DisplayName("Effective To Date"), Column("EFFECTIVE_TO_DATE"), NotNull]
        public DateTime? EffectiveToDate
        {
            get { return Fields.EffectiveToDate[this]; }
            set { Fields.EffectiveToDate[this] = value; }
        }

        [DisplayName("Modified Ts"), Column("MODIFIED_TS"),]
        public DateTime? ModifiedTs
        {
            get { return Fields.ModifiedTs[this]; }
            set { Fields.ModifiedTs[this] = value; }
        }

        [DisplayName("Modified By Nam"), Column("MODIFIED_BY_NAM"), Size(50)]
        public String ModifiedByNam
        {
            get { return Fields.ModifiedByNam[this]; }
            set { Fields.ModifiedByNam[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CompanyCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CappingAdjustmentsSuppRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField CompanyCd;
            public StringField ShipCd;
            public StringField CruiseCd;
            public Int32Field CappedCabinCapacity;
            public Int32Field SingleCabinCapacity;
            public DateTimeField EffectiveFromDate;
            public DateTimeField EffectiveToDate;
            public DateTimeField ModifiedTs;
            public StringField ModifiedByNam;
        }
    }
}
