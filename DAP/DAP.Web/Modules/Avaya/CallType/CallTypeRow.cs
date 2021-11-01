
namespace DAP.Avaya.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("Avaya"), TableName("[avaya].[Call_Type]")]
    [DisplayName("Call Type"), InstanceName("Call Type")]
    [ReadPermission(PermissionKeys.Avaya.View)]
    [LookupScript("Avaya.Call_Type")]
    public sealed class CallTypeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Type Tk"), Column("Call_Type_tk"), Identity]
        public Int32? TypeTk
        {
            get { return Fields.TypeTk[this]; }
            set { Fields.TypeTk[this] = value; }
        }

        [DisplayName("Type"), Column("Call_Type"), Size(50), PrimaryKey, QuickSearch]
        public String Type
        {
            get { return Fields.Type[this]; }
            set { Fields.Type[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Type; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Type; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CallTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TypeTk;
            public StringField Type;
        }
    }
}
