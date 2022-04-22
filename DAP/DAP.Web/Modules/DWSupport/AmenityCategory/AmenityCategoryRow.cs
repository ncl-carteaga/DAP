
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[Amenity_Category]")]
    [DisplayName("Amenity Category"), InstanceName("Amenity Category")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [LookupScript("DWSupport.AmenityCategory")]
    public sealed class AmenityCategoryRow : Row, IIdRow, INameRow
    {
        [DisplayName("Category Cd"), Column("Amenity_Category_Cd"), Size(250), PrimaryKey, QuickSearch]
        public String CategoryCd
        {
            get { return Fields.CategoryCd[this]; }
            set { Fields.CategoryCd[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CategoryCd; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CategoryCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AmenityCategoryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField CategoryCd;
        }
    }
}
