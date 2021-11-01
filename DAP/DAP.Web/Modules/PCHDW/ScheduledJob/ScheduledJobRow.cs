
namespace DAP.PCHDW.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PCH_DW"), Module("PCHDW"), TableName("[dbo].[ScheduledJob]")]
    [DisplayName("Scheduled Job"), InstanceName("Scheduled Job")]
    [ReadPermission(PermissionKeys.EDMSupport.View)]
    [ModifyPermission(PermissionKeys.EDMSupport.Modify)]
    [DeletePermission(PermissionKeys.EDMSupport.Delete)]
    [DataAuditLog]
    public sealed class ScheduledJobRow : Row, IIdRow, INameRow
    {
        [DisplayName("Scheduled Job Id"), Identity, Visible(false)]
        public Int32? ScheduledJobId
        {
            get { return Fields.ScheduledJobId[this]; }
            set { Fields.ScheduledJobId[this] = value; }
        }

        [DisplayName("Job Name"), Size(50), QuickSearch]
        public String JobName
        {
            get { return Fields.JobName[this]; }
            set { Fields.JobName[this] = value; }
        }

        [DisplayName("Job Description"), Size(800)]
        public String JobDescription
        {
            get { return Fields.JobDescription[this]; }
            set { Fields.JobDescription[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ScheduledJobId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.JobName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ScheduledJobRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ScheduledJobId;
            public StringField JobName;
            public StringField JobDescription;
        }
    }
}
