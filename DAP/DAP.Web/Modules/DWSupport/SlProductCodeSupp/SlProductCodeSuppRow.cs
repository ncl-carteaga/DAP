
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[SL_PRODUCT_CODE_SUPP]")]
    [DisplayName("Sl Product Code Supp"), InstanceName("Sl Product Code Supp")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [LookupScript("DWSupport.SlProductCodeSupp")]
    [DataAuditLog]
    public sealed class SlProductCodeSuppRow : Row, IIdRow, INameRow
    {
        [DisplayName("Sl Product Sur Key"), Column("SL_PRODUCT_SUR_KEY"), Identity, PrimaryKey]
        public Int32? SlProductSurKey
        {
            get { return Fields.SlProductSurKey[this]; }
            set { Fields.SlProductSurKey[this] = value; }
        }

        [DisplayName("Sl Product Cd"), Column("SL_PRODUCT_CD"), Size(4), NotNull, QuickSearch, Updatable(false)]
        public String SlProductCd
        {
            get { return Fields.SlProductCd[this]; }
            set { Fields.SlProductCd[this] = value; }
        }

        [DisplayName("Sl Product Desc"), Column("SL_PRODUCT_DESC"), Size(250), NotNull, LookupInclude]
        public String SlProductDesc
        {
            get { return Fields.SlProductDesc[this]; }
            set { Fields.SlProductDesc[this] = value; }
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
            get { return Fields.SlProductCd; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SlProductDesc; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SlProductCodeSuppRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SlProductSurKey;
            public StringField SlProductCd;
            public StringField SlProductDesc;
            public StringField CreatedByName;
            public DateTimeField CreatedTs;
            public StringField ModifiedByName;
            public DateTimeField ModifiedTs;
        }
    }
}
