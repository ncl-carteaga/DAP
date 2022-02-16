
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[invoiceItemSubType]")]
    [DisplayName("Invoice Item Sub Type"), InstanceName("Invoice Item Sub Type")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [LookupScript("DWSupport.GetInvoiceItemSubType")]
    public sealed class InvoiceItemSubTypeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Item Sub Type Cd"), Column("INVOICE_ITEM_SUB_TYPE_CD"), Size(50), PrimaryKey, QuickSearch]
        public String ItemSubTypeCd
        {
            get { return Fields.ItemSubTypeCd[this]; }
            set { Fields.ItemSubTypeCd[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ItemSubTypeCd; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ItemSubTypeCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public InvoiceItemSubTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField ItemSubTypeCd;
        }
    }
}
