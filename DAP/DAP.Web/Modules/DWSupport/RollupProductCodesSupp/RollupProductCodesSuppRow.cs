
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[ROLLUP_PRODUCT_CODES_SUPP]")]
    [DisplayName("Rollup Product Codes Supp"), InstanceName("Rollup Product Codes Supp")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class RollupProductCodesSuppRow : Row, IIdRow, INameRow
    {
        [DisplayName("Rollup Product Sur Key"), Column("ROLLUP_PRODUCT_SUR_KEY"), PrimaryKey]
        public Int16? RollupProductSurKey
        {
            get { return Fields.RollupProductSurKey[this]; }
            set { Fields.RollupProductSurKey[this] = value; }
        }

        [DisplayName("Product Cd"), Column("PRODUCT_CD"), Size(50), QuickSearch]
        public String ProductCd
        {
            get { return Fields.ProductCd[this]; }
            set { Fields.ProductCd[this] = value; }
        }

        [DisplayName("Rm Rollup Product Cd"), Column("RM_ROLLUP_PRODUCT_CD"), Size(6)]
        public String RmRollupProductCd
        {
            get { return Fields.RmRollupProductCd[this]; }
            set { Fields.RmRollupProductCd[this] = value; }
        }

        [DisplayName("Rm Rollup Product Desc"), Column("RM_ROLLUP_PRODUCT_DESC"), Size(25)]
        public String RmRollupProductDesc
        {
            get { return Fields.RmRollupProductDesc[this]; }
            set { Fields.RmRollupProductDesc[this] = value; }
        }

        [DisplayName("Brochure Rollup Product Cd"), Column("BROCHURE_ROLLUP_PRODUCT_CD"), Size(6)]
        public String BrochureRollupProductCd
        {
            get { return Fields.BrochureRollupProductCd[this]; }
            set { Fields.BrochureRollupProductCd[this] = value; }
        }

        [DisplayName("Brochure Rollup Product Desc"), Column("BROCHURE_ROLLUP_PRODUCT_DESC"), Size(25)]
        public String BrochureRollupProductDesc
        {
            get { return Fields.BrochureRollupProductDesc[this]; }
            set { Fields.BrochureRollupProductDesc[this] = value; }
        }

        [Updatable(false), Insertable(false)]
        [DisplayName("Created By Nam"), Column("CREATED_BY_NAM"), Size(50), NotNull]
        public String CreatedByNam
        {
            get { return Fields.CreatedByNam[this]; }
            set { Fields.CreatedByNam[this] = value; }
        }

        [Updatable(false), Insertable(false)]
        [DisplayName("Created Ts"), Column("CREATED_TS"), NotNull]
        public DateTime? CreatedTs
        {
            get { return Fields.CreatedTs[this]; }
            set { Fields.CreatedTs[this] = value; }
        }

        [Updatable(false), Insertable(false)]
        [DisplayName("Modified By Nam"), Column("MODIFIED_BY_NAM"), Size(50)]
        public String ModifiedByNam
        {
            get { return Fields.ModifiedByNam[this]; }
            set { Fields.ModifiedByNam[this] = value; }
        }

        [Updatable(false), Insertable(false)]
        [DisplayName("Modified Ts"), Column("MODIFIED_TS"), NotNull]
        public DateTime? ModifiedTs
        {
            get { return Fields.ModifiedTs[this]; }
            set { Fields.ModifiedTs[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.RollupProductSurKey; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ProductCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RollupProductCodesSuppRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int16Field RollupProductSurKey;
            public StringField ProductCd;
            public StringField RmRollupProductCd;
            public StringField RmRollupProductDesc;
            public StringField BrochureRollupProductCd;
            public StringField BrochureRollupProductDesc;
            public StringField CreatedByNam;
            public DateTimeField CreatedTs;
            public StringField ModifiedByNam;
            public DateTimeField ModifiedTs;
        }
    }
}
