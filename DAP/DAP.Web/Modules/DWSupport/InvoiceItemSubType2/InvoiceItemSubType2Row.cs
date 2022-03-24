
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[invoiceItemSubType2]")]
    [DisplayName("Invoice Item Sub Type2"), InstanceName("Invoice Item Sub Type2")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [LookupScript("DWSupport.GetInvoiceItemSubType2")]
    public sealed class InvoiceItemSubType2Row : Row, IIdRow, INameRow
    {
        [DisplayName("Item Sub Type2 Cd"), Column("INVOICE_ITEM_SUB_TYPE2_CD"), Size(50), PrimaryKey, QuickSearch]
        public String ItemSubType2Cd
        {
            get { return Fields.ItemSubType2Cd[this]; }
            set { Fields.ItemSubType2Cd[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ItemSubType2Cd; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ItemSubType2Cd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public InvoiceItemSubType2Row()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField ItemSubType2Cd;
        }
    }
}
