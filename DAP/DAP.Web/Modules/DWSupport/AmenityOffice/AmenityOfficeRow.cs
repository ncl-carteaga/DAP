
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[Amenity_Office]")]
    [DisplayName("Amenity Office"), InstanceName("Amenity Office")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [LookupScript("DWSupport.AmenityOffice")]
    public sealed class AmenityOfficeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Cd"), Column("Office_Cd"), Size(250), PrimaryKey, QuickSearch]
        public String Cd
        {
            get { return Fields.Cd[this]; }
            set { Fields.Cd[this] = value; }
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

        public AmenityOfficeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField Cd;
        }
    }
}
