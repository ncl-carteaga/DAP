
namespace DAP.PCHDW.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PCH_DW"), Module("PCHDW"), TableName("[dbo].[revenue_adhoc_management]")]
    [DisplayName("Revenue Adhoc Management"), InstanceName("Revenue Adhoc Management")]
    [ReadPermission(PermissionKeys.EDMSupport.View)]
    [ModifyPermission(PermissionKeys.EDMSupport.Modify)]
    [DeletePermission(PermissionKeys.EDMSupport.Delete)]
    [DataAuditLog]
    public sealed class RevenueAdhocManagementRow : Row, IIdRow, INameRow
    {
        [DisplayName("Key"), Column("key"), Identity]
        public Int32? Key
        {
            get { return Fields.Key[this]; }
            set { Fields.Key[this] = value; }
        }

        [DisplayName("Cube Type"), Column("database_id"), Size(50), QuickSearch]
        public String DatabaseId
        {
            get { return Fields.DatabaseId[this]; }
            set { Fields.DatabaseId[this] = value; }
        }

        [DisplayName("Cube"), Column("cube_id"), Size(50), NotNull]
        public String CubeId
        {
            get { return Fields.CubeId[this]; }
            set { Fields.CubeId[this] = value; }
        }

        [DisplayName("Measuregroup Id"), Column("measuregroup_id"), Size(50), Visible(false)]
        public String MeasuregroupId
        {
            get { return Fields.MeasuregroupId[this]; }
            set { Fields.MeasuregroupId[this] = value; }
        }

        [DisplayName("Adhoc Date"), Column("adhoc_date"), NotNull]
        public DateTime? AdhocDate
        {
            get { return Fields.AdhocDate[this]; }
            set { Fields.AdhocDate[this] = value; }
        }

        [DisplayName("Adhoc Date Tk"), Column("adhoc_date_tk"), NotNull, Updatable(false)]
        public Int32? AdhocDateTk
        {
            get { return Fields.AdhocDateTk[this]; }
            set { Fields.AdhocDateTk[this] = value; }
        }

        [DisplayName("Adhoc Stlydate"), Column("adhoc_stlydate"), NotNull]
        public DateTime? AdhocStlydate
        {
            get { return Fields.AdhocStlydate[this]; }
            set { Fields.AdhocStlydate[this] = value; }
        }

        [DisplayName("Adhoc Stlydate Tk"), Column("adhoc_stlydate_tk"), NotNull, Updatable(false)]
        public Int32? AdhocStlydateTk
        {
            get { return Fields.AdhocStlydateTk[this]; }
            set { Fields.AdhocStlydateTk[this] = value; }
        }

        [DisplayName("Last Processed Date Time"), Column("last_processed_date_time"), Updatable(false), Insertable(false)]
        public DateTime? LastProcessedDateTime
        {
            get { return Fields.LastProcessedDateTime[this]; }
            set { Fields.LastProcessedDateTime[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Key; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DatabaseId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RevenueAdhocManagementRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Key;
            public StringField DatabaseId;
            public StringField CubeId;
            public StringField MeasuregroupId;
            public DateTimeField AdhocDate;
            public Int32Field AdhocDateTk;
            public DateTimeField AdhocStlydate;
            public Int32Field AdhocStlydateTk;
            public DateTimeField LastProcessedDateTime;
        }
    }
}
