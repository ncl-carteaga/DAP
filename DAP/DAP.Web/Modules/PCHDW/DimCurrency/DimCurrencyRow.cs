
namespace DAP.PCHDW.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PCH_DW"), Module("PCHDW"), TableName("[dbo].[dim_currency]")]
    [DisplayName("Dim Currency"), InstanceName("Dim Currency")]
    [ReadPermission(PermissionKeys.EDMSupport.View)]
    [LookupScript("PCHDW.Currency")]
    public sealed class DimCurrencyRow : Row, IIdRow, INameRow
    {
        [DisplayName("Tk"), Column("currency_tk"), Identity]
        public Int32? Tk
        {
            get { return Fields.Tk[this]; }
            set { Fields.Tk[this] = value; }
        }

        [DisplayName("Cd"), Column("currency_cd"), Size(5), NotNull, QuickSearch, LookupInclude]
        public String Cd
        {
            get { return Fields.Cd[this]; }
            set { Fields.Cd[this] = value; }
        }

        [DisplayName("Desc"), Column("currency_desc"), Size(60)]
        public String Desc
        {
            get { return Fields.Desc[this]; }
            set { Fields.Desc[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Cd; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Cd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DimCurrencyRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Tk;
            public StringField Cd;
            public StringField Desc;
        }
    }
}
