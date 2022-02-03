
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[vw_GetSEAPortCode]")]
    [DisplayName("Vw Get Sea Port Code"), InstanceName("Vw Get Sea Port Code")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [LookupScript("DWSupport.GetPortNames")]
    public sealed class VwGetSeaPortCodeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Port Code"), Column("port_code"), Size(4), NotNull, QuickSearch]
        public String PortCode
        {
            get { return Fields.PortCode[this]; }
            set { Fields.PortCode[this] = value; }
        }

        [DisplayName("Port Name"), Column("port_name"), Size(30), NotNull, LookupInclude]
        public String PortName
        {
            get { return Fields.PortName[this]; }
            set { Fields.PortName[this] = value; }
        }

        [DisplayName("Country Code"), Column("country_code"), Size(3), NotNull]
        public String CountryCode
        {
            get { return Fields.CountryCode[this]; }
            set { Fields.CountryCode[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.PortCode; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PortCode; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public VwGetSeaPortCodeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField PortCode;
            public StringField PortName;
            public StringField CountryCode;
        }
    }
}
