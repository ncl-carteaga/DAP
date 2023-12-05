
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[CAPACITY_SUPP]")]
    [DisplayName("Capacity Supp"), InstanceName("Capacity Supp")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]
    public sealed class CapacitySuppRow : Row, IIdRow, INameRow
    {
        [DisplayName("Capacity Id"), Column("CAPACITY_ID"), Identity]
        public Int32? CapacityId
        {
            get { return Fields.CapacityId[this]; }
            set { Fields.CapacityId[this] = value; }
        }

        [DisplayName("Ship Cd"), Column("SHIP_CD"), Size(255), NotNull, QuickSearch, LookupEditor(typeof(ShipRow))]
        public String ShipCd
        {
            get { return Fields.ShipCd[this]; }
            set { Fields.ShipCd[this] = value; }
        }

        [DisplayName("Do Capacity"), Column("DO_CAPACITY"), NotNull]
        public Int32? DoCapacity
        {
            get { return Fields.DoCapacity[this]; }
            set { Fields.DoCapacity[this] = value; }
        }

        [DisplayName("Cabin Capacity"), Column("CABIN_CAPACITY"), NotNull]
        public Int32? CabinCapacity
        {
            get { return Fields.CabinCapacity[this]; }
            set { Fields.CabinCapacity[this] = value; }
        }

        [DisplayName("Effective From Dt"), Column("EFFECTIVE_FROM_DT"), NotNull]
        public DateTime? EffectiveFromDt
        {
            get { return Fields.EffectiveFromDt[this]; }
            set { Fields.EffectiveFromDt[this] = value; }
        }

        [DisplayName("Effective To Dt"), Column("EFFECTIVE_TO_DT"), NotNull]
        public DateTime? EffectiveToDt
        {
            get { return Fields.EffectiveToDt[this]; }
            set { Fields.EffectiveToDt[this] = value; }
        }

        [DisplayName("Sail Start Date"), Column("SAIL_START_DATE"), NotNull]
        public DateTime? SailStartDate
        {
            get { return Fields.SailStartDate[this]; }
            set { Fields.SailStartDate[this] = value; }
        }

        [DisplayName("Sail End Date"), Column("SAIL_END_DATE"), NotNull]
        public DateTime? SailEndDate
        {
            get { return Fields.SailEndDate[this]; }
            set { Fields.SailEndDate[this] = value; }
        }

        [DisplayName("Created Ts"), Column("CREATED_TS")]
        public DateTime? CreatedTs
        {
            get { return Fields.CreatedTs[this]; }
            set { Fields.CreatedTs[this] = value; }
        }

        [DisplayName("Created By Nam"), Column("CREATED_BY_NAM"), Size(50)]
        public String CreatedByNam
        {
            get { return Fields.CreatedByNam[this]; }
            set { Fields.CreatedByNam[this] = value; }
        }

        [DisplayName("Modified Ts"), Column("MODIFIED_TS")]
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
            get { return Fields.CapacityId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ShipCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CapacitySuppRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CapacityId;
            public StringField ShipCd;
            public Int32Field DoCapacity;
            public Int32Field CabinCapacity;
            public DateTimeField EffectiveFromDt;
            public DateTimeField EffectiveToDt;
            public DateTimeField SailStartDate;
            public DateTimeField SailEndDate;
            public DateTimeField CreatedTs;
            public StringField CreatedByNam;
            public DateTimeField ModifiedTs;
            public StringField ModifiedByNam;
        }
    }
}
