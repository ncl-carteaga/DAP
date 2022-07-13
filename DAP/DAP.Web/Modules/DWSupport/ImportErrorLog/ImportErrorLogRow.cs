
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[ImportErrorLog]")]
    [DisplayName("Import Error Log"), InstanceName("Import Error Log")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    public sealed class ImportErrorLogRow : Row, IIdRow, INameRow
    {
        [DisplayName("Import Log Id"), Column("ImportLogID"), Identity]
        public Int32? ImportLogId
        {
            get { return Fields.ImportLogId[this]; }
            set { Fields.ImportLogId[this] = value; }
        }

        [DisplayName("Run Number"), NotNull]
        public Int32? RunNumber
        {
            get { return Fields.RunNumber[this]; }
            set { Fields.RunNumber[this] = value; }
        }

        [DisplayName("Import Date"), NotNull]
        public DateTime? ImportDate
        {
            get { return Fields.ImportDate[this]; }
            set { Fields.ImportDate[this] = value; }
        }

        [DisplayName("Calledby"), Size(50), NotNull, QuickSearch]
        public String Calledby
        {
            get { return Fields.Calledby[this]; }
            set { Fields.Calledby[this] = value; }
        }

        [DisplayName("File Name"), Size(400), NotNull]
        public String FileName
        {
            get { return Fields.FileName[this]; }
            set { Fields.FileName[this] = value; }
        }

        [DisplayName("Error Message"), Size(4000), NotNull]
        public String ErrorMessage
        {
            get { return Fields.ErrorMessage[this]; }
            set { Fields.ErrorMessage[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ImportLogId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Calledby; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ImportErrorLogRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ImportLogId;
            public Int32Field RunNumber;
            public DateTimeField ImportDate;
            public StringField Calledby;
            public StringField FileName;
            public StringField ErrorMessage;
        }
    }
}
