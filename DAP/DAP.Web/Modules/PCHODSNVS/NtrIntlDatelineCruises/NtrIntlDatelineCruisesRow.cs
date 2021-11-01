
namespace DAP.PCHODSNVS.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PCH_ODS_NVS"), Module("PCHODSNVS"), TableName("[dbo].[ntr_intl_dateline_cruises]")]
    [DisplayName("Ntr Intl Dateline Cruises"), InstanceName("Ntr Intl Dateline Cruises")]
    [ReadPermission(PermissionKeys.Finance.View)]
    [ModifyPermission(PermissionKeys.Finance.Modify)]
    [DeletePermission(PermissionKeys.Finance.Delete)]
    [DataAuditLog]
    public sealed class NtrIntlDatelineCruisesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Cruise Intl Tk"), Column("cruise_intl_tk"), Identity, Visible(false)]
        public Int32? CruiseIntlTk
        {
            get { return Fields.CruiseIntlTk[this]; }
            set { Fields.CruiseIntlTk[this] = value; }
        }

        [DisplayName("Company Cd"), Column("company_cd"), Size(3), PrimaryKey, Updatable(false), DAP.PCHODS.CompanyEditor]
        public String CompanyCd
        {
            get { return Fields.CompanyCd[this]; }
            set { Fields.CompanyCd[this] = value; }
        }

        [DisplayName("Cruise Segment Cd"), Column("cruise_segment_cd"), Size(10), PrimaryKey, QuickSearch, Updatable(false)]
        public String CruiseSegmentCd
        {
            get { return Fields.CruiseSegmentCd[this]; }
            set { Fields.CruiseSegmentCd[this] = value; }
        }

        [DisplayName("Cruise Days Qty"), Column("cruise_days_qty")]
        public Int32? CruiseDaysQty
        {
            get { return Fields.CruiseDaysQty[this]; }
            set { Fields.CruiseDaysQty[this] = value; }
        }

        [DisplayName("Cruise Calendar Days Qty"), Column("cruise_calendar_days_qty")]
        public Int32? CruiseCalendarDaysQty
        {
            get { return Fields.CruiseCalendarDaysQty[this]; }
            set { Fields.CruiseCalendarDaysQty[this] = value; }
        }

        [DisplayName("Load Dt"), Column("load_dt"), Updatable(false), Insertable(false)]
        public DateTime? LoadDt
        {
            get { return Fields.LoadDt[this]; }
            set { Fields.LoadDt[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CruiseIntlTk; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CompanyCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public NtrIntlDatelineCruisesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CruiseIntlTk;
            public StringField CompanyCd;
            public StringField CruiseSegmentCd;
            public Int32Field CruiseDaysQty;
            public Int32Field CruiseCalendarDaysQty;
            public DateTimeField LoadDt;
        }
    }
}
