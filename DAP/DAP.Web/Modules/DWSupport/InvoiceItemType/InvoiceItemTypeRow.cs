
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[invoiceItemType]")]
    [DisplayName("Invoice Item Type"), InstanceName("Invoice Item Type")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [LookupScript("DWSupport.GetInvoiceItemType")]
    public sealed class InvoiceItemTypeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Item Type Cd"), Column("INVOICE_ITEM_TYPE_CD"), Size(50), PrimaryKey, QuickSearch]
        public String ItemTypeCd
        {
            get { return Fields.ItemTypeCd[this]; }
            set { Fields.ItemTypeCd[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ItemTypeCd; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ItemTypeCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public InvoiceItemTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField ItemTypeCd;
        }
    }
}
