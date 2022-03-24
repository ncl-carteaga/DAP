
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[invoiceItemSource]")]
    [DisplayName("Invoice Item Source"), InstanceName("Invoice Item Source")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [LookupScript("DWSupport.GetInvoiceItemSource")]
    public sealed class InvoiceItemSourceRow : Row, IIdRow, INameRow
    {
        [DisplayName("Item Source Cd"), Column("INVOICE_ITEM_SOURCE_CD"), Size(30), PrimaryKey, QuickSearch]
        public String ItemSourceCd
        {
            get { return Fields.ItemSourceCd[this]; }
            set { Fields.ItemSourceCd[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ItemSourceCd; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ItemSourceCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public InvoiceItemSourceRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField ItemSourceCd;
        }
    }
}
