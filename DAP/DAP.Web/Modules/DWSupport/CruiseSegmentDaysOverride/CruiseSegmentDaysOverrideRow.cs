
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[nvs].[Cruise_segment_days_override]")]
    [DisplayName("Cruise Segment Days Override"), InstanceName("Cruise Segment Days Override")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]
    public sealed class CruiseSegmentDaysOverrideRow : Row, IIdRow, INameRow
    {
        [DisplayName("Cruise Segment Day Override Id"), Column("CruiseSegmentDayOverrideID"), Identity]
        public Int32? CruiseSegmentDayOverrideId
        {
            get { return Fields.CruiseSegmentDayOverrideId[this]; }
            set { Fields.CruiseSegmentDayOverrideId[this] = value; }
        }

        [DisplayName("Cruise Cd"), Column("cruise_cd"), Size(10), NotNull, QuickSearch]
        public String CruiseCd
        {
            get { return Fields.CruiseCd[this]; }
            set { Fields.CruiseCd[this] = value; }
        }

        [DisplayName("Company Cd"), Column("company_cd"), Size(3), NotNull]
        public String CompanyCd
        {
            get { return Fields.CompanyCd[this]; }
            set { Fields.CompanyCd[this] = value; }
        }

        [DisplayName("Cruise Days Qty"), Column("cruise_days_qty"), NotNull]
        public Int32? CruiseDaysQty
        {
            get { return Fields.CruiseDaysQty[this]; }
            set { Fields.CruiseDaysQty[this] = value; }
        }

        [DisplayName("Cruise Segment Days Qty"), Column("cruise_segment_days_qty"), NotNull]
        public Int32? CruiseSegmentDaysQty
        {
            get { return Fields.CruiseSegmentDaysQty[this]; }
            set { Fields.CruiseSegmentDaysQty[this] = value; }
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
            get { return Fields.CruiseSegmentDayOverrideId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CruiseCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CruiseSegmentDaysOverrideRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CruiseSegmentDayOverrideId;
            public StringField CruiseCd;
            public StringField CompanyCd;
            public Int32Field CruiseDaysQty;
            public Int32Field CruiseSegmentDaysQty;
            public DateTimeField EffectiveFrom;
            public DateTimeField EffectiveTo;
            public DateTimeField LoadDt;
        }
    }
}
