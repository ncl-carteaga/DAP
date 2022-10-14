
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;
    using Lookups;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[INVOICE_ITEM_TYPE_MASTER_SUPP]")]
    [DisplayName("Invoice Item Type Master"), InstanceName("Invoice Item Type Master Supp")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]
    public sealed class InvoiceItemTypeMasterSuppRow : Row, IIdRow, INameRow
    {
        [DisplayName("Invoice Item Type Cd"), Column("INVOICE_ITEM_TYPE_CD"), Size(50), /*LookupEditor("DWSupport.GetInvoiceItemType"), QuickFilter*/]
        public String InvoiceItemTypeCd
        {
            get { return Fields.InvoiceItemTypeCd[this]; }
            set { Fields.InvoiceItemTypeCd[this] = value; }
        }

        [DisplayName("Invoice Item Sub Type Cd"), Column("INVOICE_ITEM_SUB_TYPE_CD"), Size(50), /*LookupEditor("DWSupport.GetInvoiceItemSubType"), QuickFilter*/]
        public String InvoiceItemSubTypeCd
        {
            get { return Fields.InvoiceItemSubTypeCd[this]; }
            set { Fields.InvoiceItemSubTypeCd[this] = value; }
        }

        [DisplayName("Invoice Item Sub Type2 Cd"), Column("INVOICE_ITEM_SUB_TYPE2_CD"), Size(50), /*LookupEditor("DWSupport.GetInvoiceItemSubType2"), QuickFilter*/]
        public String InvoiceItemSubType2Cd
        {
            get { return Fields.InvoiceItemSubType2Cd[this]; }
            set { Fields.InvoiceItemSubType2Cd[this] = value; }
        }

        [DisplayName("Invoice Item Sub Type3 Cd"), Column("INVOICE_ITEM_SUB_TYPE3_CD"), Size(50), /*LookupEditor("DWSupport.GetInvoiceItemSubType3"), QuickFilter*/]
        public String InvoiceItemSubType3Cd
        {
            get { return Fields.InvoiceItemSubType3Cd[this]; }
            set { Fields.InvoiceItemSubType3Cd[this] = value; }
        }

        [DisplayName("Invoice Item Source Cd"), Column("INVOICE_ITEM_SOURCE_CD"), Size(30), /*LookupEditor("DWSupport.GetInvoiceItemSource"), QuickFilter*/]
        public String InvoiceItemSourceCd
        {
            get { return Fields.InvoiceItemSourceCd[this]; }
            set { Fields.InvoiceItemSourceCd[this] = value; }
        }

        [DisplayName("Master Component Cd"), Column("MASTER_COMPONENT_CD"), Size(30), QuickFilter, LookupEditor("DWSupport.GetMasterComponent")]
        public String MasterComponentCd
        {
            get { return Fields.MasterComponentCd[this]; }
            set { Fields.MasterComponentCd[this] = value; }
        }

        [DisplayName("Comments Txt"), Column("COMMENTS_TXT"), Size(50)]
        public String CommentsTxt
        {
            get { return Fields.CommentsTxt[this]; }
            set { Fields.CommentsTxt[this] = value; }
        }

        [DisplayName("Created Ts"), Column("CREATED_TS"), NotNull, Updatable(false), Insertable(false)]
        public DateTime? CreatedTs
        {
            get { return Fields.CreatedTs[this]; }
            set { Fields.CreatedTs[this] = value; }
        }

        [DisplayName("Created By Nam"), Column("CREATED_BY_NAM"), Size(50), NotNull, Updatable(false), Insertable(false)]
        public String CreatedByNam
        {
            get { return Fields.CreatedByNam[this]; }
            set { Fields.CreatedByNam[this] = value; }
        }

        [DisplayName("Modified By Nam"), Column("MODIFIED_BY_NAM"), Size(50), Updatable(false), Insertable(false)]
        public String ModifiedByNam
        {
            get { return Fields.ModifiedByNam[this]; }
            set { Fields.ModifiedByNam[this] = value; }
        }

        [DisplayName("Modified Ts"), Column("MODIFIED_TS"), NotNull, Updatable(false), Insertable(false)]
        public DateTime? ModifiedTs
        {
            get { return Fields.ModifiedTs[this]; }
            set { Fields.ModifiedTs[this] = value; }
        }

        [DisplayName("Invoice Item Type Master Id"), Column("INVOICE_ITEM_TYPE_MASTER_ID"), Identity, Visible(false)]
        public Int64? InvoiceItemTypeMasterId
        {
            get { return Fields.InvoiceItemTypeMasterId[this]; }
            set { Fields.InvoiceItemTypeMasterId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.InvoiceItemTypeMasterId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.InvoiceItemTypeCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public InvoiceItemTypeMasterSuppRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField InvoiceItemTypeCd;
            public StringField InvoiceItemSubTypeCd;
            public StringField InvoiceItemSubType2Cd;
            public StringField InvoiceItemSubType3Cd;
            public StringField InvoiceItemSourceCd;
            public StringField MasterComponentCd;
            public StringField CommentsTxt;
            public DateTimeField CreatedTs;
            public StringField CreatedByNam;
            public StringField ModifiedByNam;
            public DateTimeField ModifiedTs;
            public Int64Field InvoiceItemTypeMasterId;
        }
    }
}
