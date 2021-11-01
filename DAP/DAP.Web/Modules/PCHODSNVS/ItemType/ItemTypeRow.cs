
namespace DAP.PCHODSNVS.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PCH_ODS_NVS"), Module("PCHODSNVS"), TableName("[dap].[Item_Type]")]
    [DisplayName("Item Type"), InstanceName("Item Type")]
    [ReadPermission(PermissionKeys.Finance.View)]
    [ModifyPermission(PermissionKeys.Finance.Modify)]
    [DeletePermission(PermissionKeys.Finance.Delete)]
    [LookupScript("PCHODSNVS.Item_Type")]
    public sealed class ItemTypeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Type Tk"), Column("Item_Type_tk"), Identity]
        public Int32? TypeTk
        {
            get { return Fields.TypeTk[this]; }
            set { Fields.TypeTk[this] = value; }
        }

        [DisplayName("Type"), Column("Item_Type"), Size(100), PrimaryKey, QuickSearch]
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

        public ItemTypeRow()
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
