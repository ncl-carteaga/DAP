
namespace DAP.SSISConfig.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PCH_ODS_STG"), Module("SSISConfig"), TableName("[etl].[Data_Flow]")]
    [DisplayName("GSC Micros Data Flow"), InstanceName("Micros Data Flow")]
    [ReadPermission(PermissionKeys.SSISConfig.View)]
    [ModifyPermission(PermissionKeys.SSISConfig.Modify)]
    [DeletePermission(PermissionKeys.SSISConfig.Delete)]
    [DataAuditLog]
    public sealed class MicrosDataFlowRow : Row, IIdRow, INameRow
    {
        [DisplayName("Key"), Column("key"), Identity]
        public Int32? Key
        {
            get { return Fields.Key[this]; }
            set { Fields.Key[this] = value; }
        }

        [DisplayName("Source"), Column("source"), Size(50), QuickSearch]
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

        [DisplayName("Source Desc"), Column("source_desc"), Size(75)]
        public String SourceDesc
        {
            get { return Fields.SourceDesc[this]; }
            set { Fields.SourceDesc[this] = value; }
        }

        [DisplayName("Target Desc"), Column("target_desc"), Size(75)]
        public String TargetDesc
        {
            get { return Fields.TargetDesc[this]; }
            set { Fields.TargetDesc[this] = value; }
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

        [DisplayName("Lse Index"), Column("LSEIndex")]
        public Int32? LseIndex
        {
            get { return Fields.LseIndex[this]; }
            set { Fields.LseIndex[this] = value; }
        }

        [DisplayName("Ce Index"), Column("CEIndex")]
        public Int32? CeIndex
        {
            get { return Fields.CeIndex[this]; }
            set { Fields.CeIndex[this] = value; }
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

        public MicrosDataFlowRow()
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
            public StringField SourceDesc;
            public StringField TargetDesc;
            public StringField Package;
            public Int32Field Status;
            public DateTimeField Lset;
            public DateTimeField Cet;
            public Int32Field LseIndex;
            public Int32Field CeIndex;
        }
    }
}
