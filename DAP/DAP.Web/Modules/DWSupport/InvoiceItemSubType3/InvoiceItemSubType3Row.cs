
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[invoiceItemSubType3]")]
    [DisplayName("Invoice Item Sub Type3"), InstanceName("Invoice Item Sub Type3")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [LookupScript("DWSupport.GetInvoiceItemSubType3")]
    public sealed class InvoiceItemSubType3Row : Row, IIdRow, INameRow
    {
        [DisplayName("Item Sub Type3 Cd"), Column("INVOICE_ITEM_SUB_TYPE3_CD"), Size(50), PrimaryKey, QuickSearch]
        public String ItemSubType3Cd
        {
            get { return Fields.ItemSubType3Cd[this]; }
            set { Fields.ItemSubType3Cd[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ItemSubType3Cd; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ItemSubType3Cd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public InvoiceItemSubType3Row()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField ItemSubType3Cd;
        }
    }
}
