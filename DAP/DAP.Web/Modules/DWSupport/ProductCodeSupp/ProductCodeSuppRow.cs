
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[PRODUCT_CODE_SUPP]")]
    [DisplayName("Product Code Supp"), InstanceName("Product Code Supp")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [LookupScript("DWSupport.ProductCodeSupp")]
    [DataAuditLog]
    public sealed class ProductCodeSuppRow : Row, IIdRow, INameRow
    {
        [DisplayName("Product Sur Key"), Column("PRODUCT_SUR_KEY"), Identity, Visible(false)]
        public Int32? ProductSurKey
        {
            get { return Fields.ProductSurKey[this]; }
            set { Fields.ProductSurKey[this] = value; }
        }

        [DisplayName("Product Cd"), Column("PRODUCT_CD"), Size(4), NotNull, QuickSearch, Updatable(false)]
        public String ProductCd
        {
            get { return Fields.ProductCd[this]; }
            set { Fields.ProductCd[this] = value; }
        }

        [DisplayName("Product Desc"), Column("PRODUCT_DESC"), Size(250), NotNull,LookupInclude]
        public String ProductDesc
        {
            get { return Fields.ProductDesc[this]; }
            set { Fields.ProductDesc[this] = value; }
        }

        [DisplayName("Product Code Id"), Column("PRODUCT_CODE_ID"), NotNull, Updatable(false), Insertable(false)]
        public Int32? ProductCodeId
        {
            get { return Fields.ProductCodeId[this]; }
            set { Fields.ProductCodeId[this] = value; }
        }

        [DisplayName("Created By Name"), Column("CREATED_BY_NAME"), Size(50), NotNull, Updatable(false), Insertable(false)]
        public String CreatedByName
        {
            get { return Fields.CreatedByName[this]; }
            set { Fields.CreatedByName[this] = value; }
        }

        [DisplayName("Created Ts"), Column("CREATED_TS"), NotNull, Updatable(false), Insertable(false)]
        public DateTime? CreatedTs
        {
            get { return Fields.CreatedTs[this]; }
            set { Fields.CreatedTs[this] = value; }
        }

        [DisplayName("Modified By Name"), Column("MODIFIED_BY_NAME"), Size(50), Updatable(false), Insertable(false)]
        public String ModifiedByName
        {
            get { return Fields.ModifiedByName[this]; }
            set { Fields.ModifiedByName[this] = value; }
        }

        [DisplayName("Modified Ts"), Column("MODIFIED_TS"), Updatable(false), Insertable(false)]
        public DateTime? ModifiedTs
        {
            get { return Fields.ModifiedTs[this]; }
            set { Fields.ModifiedTs[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ProductCd; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ProductDesc; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductCodeSuppRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProductSurKey;
            public StringField ProductCd;
            public StringField ProductDesc;
            public Int32Field ProductCodeId;
            public StringField CreatedByName;
            public DateTimeField CreatedTs;
            public StringField ModifiedByName;
            public DateTimeField ModifiedTs;
        }
    }
}
