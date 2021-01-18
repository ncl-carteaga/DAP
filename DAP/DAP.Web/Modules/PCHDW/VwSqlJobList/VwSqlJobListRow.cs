
namespace DAP.PCHDW.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PCH_DW"), Module("PCHDW"), TableName("[dbo].[vw_SQLJobList]")]
    [DisplayName("Vw Sql Job List"), InstanceName("Vw Sql Job List")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class VwSqlJobListRow : Row, IIdRow, INameRow
    {
        [DisplayName("Job Name"), Column("name"), Size(128), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Job Description"), Column("JobDescription"), Size(800), QuickSearch]
        public String JobDescription
        {
            get { return Fields.JobDescription[this]; }
            set { Fields.JobDescription[this] = value; }
        }

        [DisplayName("Enabled"), Column("enabled"), NotNull, CheckboxFormatter]
        public Boolean? Enabled
        {
            get { return Fields.Enabled[this]; }
            set { Fields.Enabled[this] = value; }
        }

        [DisplayName("Date Created"), Column("date_created"), NotNull]
        public DateTime? DateCreated
        {
            get { return Fields.DateCreated[this]; }
            set { Fields.DateCreated[this] = value; }
        }

        [DisplayName("Date Modified"), Column("date_modified"), NotNull]
        public DateTime? DateModified
        {
            get { return Fields.DateModified[this]; }
            set { Fields.DateModified[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Name; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public VwSqlJobListRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField Name;
            public StringField JobDescription;
            public BooleanField Enabled;
            public DateTimeField DateCreated;
            public DateTimeField DateModified;
        }
    }
}
