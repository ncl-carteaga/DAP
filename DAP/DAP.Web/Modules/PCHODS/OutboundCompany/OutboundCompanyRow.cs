
namespace DAP.PCHODS.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PCH_ODS"), Module("PCHODS"), TableName("[dbo].[Outbound_Company]")]
    [DisplayName("Outbound Company"), InstanceName("Outbound Company")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("PCHODS.Outbound_Company")]
    public sealed class OutboundCompanyRow : Row, IIdRow, INameRow
    {
        [DisplayName("Cd"), Column("company_cd"), Size(3), NotNull, QuickSearch]
        public String Cd
        {
            get { return Fields.Cd[this]; }
            set { Fields.Cd[this] = value; }
        }

        [DisplayName("Company Name"), Column("company_nm"), Size(30), NotNull, LookupInclude]
        public String Nm
        {
            get { return Fields.Nm[this]; }
            set { Fields.Nm[this] = value; }
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

        public OutboundCompanyRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField Cd;
            public StringField Nm;
        }
    }
}
