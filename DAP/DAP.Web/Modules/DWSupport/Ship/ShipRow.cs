
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[Ship]")]
    [DisplayName("Ship"), InstanceName("Ship")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [LookupScript("DWSupport.ShipCode")]
    public sealed class ShipRow : Row, IIdRow, INameRow
    {
        [DisplayName("Ship Code"), Size(5), PrimaryKey, QuickSearch]
        public String ShipCode
        {
            get { return Fields.ShipCode[this]; }
            set { Fields.ShipCode[this] = value; }
        }

        [DisplayName("Ship Name"), Size(50), NotNull, LookupInclude]
        public String ShipName
        {
            get { return Fields.ShipName[this]; }
            set { Fields.ShipName[this] = value; }
        }

        [DisplayName("Brand"), Size(4), NotNull]
        public String Brand
        {
            get { return Fields.Brand[this]; }
            set { Fields.Brand[this] = value; }
        }

        [DisplayName("Is Active"), NotNull]
        public Boolean? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ShipCode; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ShipCode; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ShipRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField ShipCode;
            public StringField ShipName;
            public StringField Brand;
            public BooleanField IsActive;
        }
    }
}
