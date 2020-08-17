
namespace DAP.NCLHODSSPENDVIS.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("NCLH_ODS_SPEND_VIS"), Module("NCLHODSSPENDVIS"), TableName("[etl].[Data_Flow]")]
    [DisplayName("SAP ARIBA Data Flow"), InstanceName("Data Flow")]
    [ReadPermission(PermissionKeys.ConfigAdmin)]
    [ModifyPermission(PermissionKeys.ConfigAdmin)]
    public sealed class DataFlowRow : Row, IIdRow, INameRow
    {
        [DisplayName("Key"), Column("key"), Identity]
        public Int32? Key
        {
            get { return Fields.Key[this]; }
            set { Fields.Key[this] = value; }
        }

        [DisplayName("Source"), Column("source"), Size(50), NotNull, QuickSearch]
        public String Source
        {
            get { return Fields.Source[this]; }
            set { Fields.Source[this] = value; }
        }

        [DisplayName("Name"), Column("name"), Size(50), NotNull]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Process Yn"), Column("process_YN"), Size(1)]
        public String ProcessYn
        {
            get { return Fields.ProcessYn[this]; }
            set { Fields.ProcessYn[this] = value; }
        }

        [DisplayName("Target"), Column("target"), Size(50)]
        public String Target
        {
            get { return Fields.Target[this]; }
            set { Fields.Target[this] = value; }
        }

        [DisplayName("Description"), Column("description"), Size(200)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Package"), Column("package"), Size(50)]
        public String Package
        {
            get { return Fields.Package[this]; }
            set { Fields.Package[this] = value; }
        }

        [DisplayName("Status"), Column("status")]
        public Int32? Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        [DisplayName("Lset"), Column("LSET"), DisplayFormat("MM/dd/yyyy HH:mm"), DateTimeEditor(IntervalMinutes = 1)]
        public DateTime? Lset
        {
            get { return Fields.Lset[this]; }
            set { Fields.Lset[this] = value; }
        }

        [DisplayName("Cet"), Column("CET"), DisplayFormat("MM/dd/yyyy HH:mm"), DateTimeEditor(IntervalMinutes = 1)]
        public DateTime? Cet
        {
            get { return Fields.Cet[this]; }
            set { Fields.Cet[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Key; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Source; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DataFlowRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Key;
            public StringField Source;
            public StringField Name;
            public StringField ProcessYn;
            public StringField Target;
            public StringField Description;
            public StringField Package;
            public Int32Field Status;
            public DateTimeField Lset;
            public DateTimeField Cet;
        }
    }
}
