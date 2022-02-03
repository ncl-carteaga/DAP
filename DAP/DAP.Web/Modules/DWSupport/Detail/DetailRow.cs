
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[Detail]")]
    [DisplayName("Detail"), InstanceName("Detail")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class DetailRow : Row, IIdRow, INameRow
    {
        [DisplayName("Detail Id"), Identity]
        public Int32? DetailId
        {
            get { return Fields.DetailId[this]; }
            set { Fields.DetailId[this] = value; }
        }

        [DisplayName("Key1"), NotNull]
        public Int32? Key1
        {
            get { return Fields.Key1[this]; }
            set { Fields.Key1[this] = value; }
        }

        [DisplayName("Key2"), NotNull]
        public Int32? Key2
        {
            get { return Fields.Key2[this]; }
            set { Fields.Key2[this] = value; }
        }

        [DisplayName("Value1"), Size(50), QuickSearch]
        public String Value1
        {
            get { return Fields.Value1[this]; }
            set { Fields.Value1[this] = value; }
        }

        [DisplayName("Value2"), Size(50)]
        public String Value2
        {
            get { return Fields.Value2[this]; }
            set { Fields.Value2[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.DetailId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Value1; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DetailRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field DetailId;
            public Int32Field Key1;
            public Int32Field Key2;
            public StringField Value1;
            public StringField Value2;
        }
    }
}
