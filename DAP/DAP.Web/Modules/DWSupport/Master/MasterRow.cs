
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[master]")]
    [DisplayName("Master"), InstanceName("Master")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class MasterRow : Row, IIdRow, INameRow
    {
        [DisplayName("Master Id"), Identity]
        public Int32? MasterId
        {
            get { return Fields.MasterId[this]; }
            set { Fields.MasterId[this] = value; }
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

        [DisplayName("Comment"), Size(50), QuickSearch]
        public String Comment
        {
            get { return Fields.Comment[this]; }
            set { Fields.Comment[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MasterId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Comment; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MasterRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field MasterId;
            public Int32Field Key1;
            public Int32Field Key2;
            public StringField Comment;
        }
    }
}
