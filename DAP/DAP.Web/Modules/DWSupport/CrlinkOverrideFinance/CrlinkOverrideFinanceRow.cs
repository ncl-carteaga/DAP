
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[nvs].[Crlink_override_finance]")]
    [DisplayName("Crlink Override Finance"), InstanceName("Crlink Override Finance")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]
    public sealed class CrlinkOverrideFinanceRow : Row, IIdRow, INameRow
    {
        [DisplayName("Crlink Override Id"), Column("CrlinkOverrideID"), Identity, Visible(false)]
        public Int32? CrlinkOverrideId
        {
            get { return Fields.CrlinkOverrideId[this]; }
            set { Fields.CrlinkOverrideId[this] = value; }
        }

        [DisplayName("Cruise Cd"), Column("cruise_cd"), Size(10), NotNull, QuickSearch]
        public String CruiseCd
        {
            get { return Fields.CruiseCd[this]; }
            set { Fields.CruiseCd[this] = value; }
        }

        [DisplayName("Cruise Segment Cd"), Column("cruise_segment_cd"), Size(10), NotNull]
        public String CruiseSegmentCd
        {
            get { return Fields.CruiseSegmentCd[this]; }
            set { Fields.CruiseSegmentCd[this] = value; }
        }

        [DisplayName("Company Cd"), Column("company_cd"), Size(3), NotNull]
        public String CompanyCd
        {
            get { return Fields.CompanyCd[this]; }
            set { Fields.CompanyCd[this] = value; }
        }

        [DisplayName("Effective From"), Column("effective_from"), NotNull]
        public DateTime? EffectiveFrom
        {
            get { return Fields.EffectiveFrom[this]; }
            set { Fields.EffectiveFrom[this] = value; }
        }

        [DisplayName("Effective To"), Column("effective_to")]
        public DateTime? EffectiveTo
        {
            get { return Fields.EffectiveTo[this]; }
            set { Fields.EffectiveTo[this] = value; }
        }

        [DisplayName("Load Dt"), Column("load_dt"), NotNull, Updatable(false), Insertable(false)]
        public DateTime? LoadDt
        {
            get { return Fields.LoadDt[this]; }
            set { Fields.LoadDt[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CrlinkOverrideId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CruiseCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CrlinkOverrideFinanceRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CrlinkOverrideId;
            public StringField CruiseCd;
            public StringField CruiseSegmentCd;
            public StringField CompanyCd;
            public DateTimeField EffectiveFrom;
            public DateTimeField EffectiveTo;
            public DateTimeField LoadDt;
        }
    }
}
