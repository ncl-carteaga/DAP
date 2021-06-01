
namespace DAP.Avaya.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("Avaya"), TableName("[avaya].[Brand]")]
    [DisplayName("Brand"), InstanceName("Brand")]
    [ReadPermission(PermissionKeys.Avaya.View)]
    [LookupScript("Avaya.Brand")]
    public sealed class BrandRow : Row, IIdRow, INameRow
    {
        [DisplayName("Brand Tk"), Column("Brand_tk"), Identity]
        public Int32? BrandTk
        {
            get { return Fields.BrandTk[this]; }
            set { Fields.BrandTk[this] = value; }
        }

        [DisplayName("Brand"), Size(10), PrimaryKey, QuickSearch]
        public String Brand
        {
            get { return Fields.Brand[this]; }
            set { Fields.Brand[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Brand; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Brand; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BrandRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field BrandTk;
            public StringField Brand;
        }
    }
}
