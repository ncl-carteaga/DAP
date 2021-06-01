
namespace DAP.Avaya.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("Avaya"), TableName("[avaya].[Region]")]
    [DisplayName("Region"), InstanceName("Region")]
    [ReadPermission(PermissionKeys.Avaya.View)]
    [LookupScript("Avaya.Region")]
    public sealed class RegionRow : Row, IIdRow, INameRow
    {
        [DisplayName("Region Tk"), Column("Region_tk"), Identity]
        public Int32? RegionTk
        {
            get { return Fields.RegionTk[this]; }
            set { Fields.RegionTk[this] = value; }
        }

        [DisplayName("Region"), Size(250), PrimaryKey, QuickSearch]
        public String Region
        {
            get { return Fields.Region[this]; }
            set { Fields.Region[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Region; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Region; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RegionRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field RegionTk;
            public StringField Region;
        }
    }
}
