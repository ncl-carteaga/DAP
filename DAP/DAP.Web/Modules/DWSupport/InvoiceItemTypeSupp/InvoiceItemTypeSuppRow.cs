
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[INVOICE_ITEM_TYPE_SUPP]")]
    [DisplayName("Invoice Item Type"), InstanceName("Invoice Item Type Supp")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]
    public sealed class InvoiceItemTypeSuppRow : Row, IIdRow, INameRow
    {
        [DisplayName("Invoice Item Type Gen Nat Key"), Column("INVOICE_ITEM_TYPE_GEN_NAT_KEY"), Size(19)]
        public Int64? InvoiceItemTypeGenNatKey
        {
            get { return Fields.InvoiceItemTypeGenNatKey[this]; }
            set { Fields.InvoiceItemTypeGenNatKey[this] = value; }
        }

        [DisplayName("Invoice Class Type 1 Cd"), Column("INVOICE_CLASS_TYPE_1_CD"), Size(50), QuickSearch]
        public String InvoiceClassType1Cd
        {
            get { return Fields.InvoiceClassType1Cd[this]; }
            set { Fields.InvoiceClassType1Cd[this] = value; }
        }

        [DisplayName("Invoice Class Type 2 Cd"), Column("INVOICE_CLASS_TYPE_2_CD"), Size(50)]
        public String InvoiceClassType2Cd
        {
            get { return Fields.InvoiceClassType2Cd[this]; }
            set { Fields.InvoiceClassType2Cd[this] = value; }
        }

        [DisplayName("Invoice Class Type 3 Cd"), Column("INVOICE_CLASS_TYPE_3_CD"), Size(50)]
        public String InvoiceClassType3Cd
        {
            get { return Fields.InvoiceClassType3Cd[this]; }
            set { Fields.InvoiceClassType3Cd[this] = value; }
        }

        [DisplayName("Invoice Class Type 4 Cd"), Column("INVOICE_CLASS_TYPE_4_CD"), Size(50)]
        public String InvoiceClassType4Cd
        {
            get { return Fields.InvoiceClassType4Cd[this]; }
            set { Fields.InvoiceClassType4Cd[this] = value; }
        }

        [DisplayName("Invoice Item Source Cd"), Column("INVOICE_ITEM_SOURCE_CD"), Size(30)]
        public String InvoiceItemSourceCd
        {
            get { return Fields.InvoiceItemSourceCd[this]; }
            set { Fields.InvoiceItemSourceCd[this] = value; }
        }

        [DisplayName("Invoice Item Type Cd"), Column("INVOICE_ITEM_TYPE_CD"), Size(50)]
        public String InvoiceItemTypeCd
        {
            get { return Fields.InvoiceItemTypeCd[this]; }
            set { Fields.InvoiceItemTypeCd[this] = value; }
        }

        [DisplayName("Invoice Item Sub Type Cd"), Column("INVOICE_ITEM_SUB_TYPE_CD"), Size(50)]
        public String InvoiceItemSubTypeCd
        {
            get { return Fields.InvoiceItemSubTypeCd[this]; }
            set { Fields.InvoiceItemSubTypeCd[this] = value; }
        }

        [DisplayName("Invoice Item Sub Type2 Cd"), Column("INVOICE_ITEM_SUB_TYPE2_CD"), Size(50)]
        public String InvoiceItemSubType2Cd
        {
            get { return Fields.InvoiceItemSubType2Cd[this]; }
            set { Fields.InvoiceItemSubType2Cd[this] = value; }
        }

        [DisplayName("Invoice Item Sub Type3 Cd"), Column("INVOICE_ITEM_SUB_TYPE3_CD"), Size(50)]
        public String InvoiceItemSubType3Cd
        {
            get { return Fields.InvoiceItemSubType3Cd[this]; }
            set { Fields.InvoiceItemSubType3Cd[this] = value; }
        }

        [DisplayName("Component Cd"), Column("COMPONENT_CD"), Size(30)]
        public String ComponentCd
        {
            get { return Fields.ComponentCd[this]; }
            set { Fields.ComponentCd[this] = value; }
        }

        [DisplayName("Component Desc"), Column("COMPONENT_DESC"), Size(50)]
        public String ComponentDesc
        {
            get { return Fields.ComponentDesc[this]; }
            set { Fields.ComponentDesc[this] = value; }
        }

        [DisplayName("Chart Of Account Nbr"), Column("CHART_OF_ACCOUNT_NBR"), Size(15)]
        public String ChartOfAccountNbr
        {
            get { return Fields.ChartOfAccountNbr[this]; }
            set { Fields.ChartOfAccountNbr[this] = value; }
        }

        [DisplayName("Comments Txt"), Column("COMMENTS_TXT"), Size(50)]
        public String CommentsTxt
        {
            get { return Fields.CommentsTxt[this]; }
            set { Fields.CommentsTxt[this] = value; }
        }

        [DisplayName("Is Ntr Cd"), Column("IS_NTR_CD"), Size(1)]
        public String IsNtrCd
        {
            get { return Fields.IsNtrCd[this]; }
            set { Fields.IsNtrCd[this] = value; }
        }

        [DisplayName("Is Gtr Cd"), Column("IS_GTR_CD"), Size(1)]
        public String IsGtrCd
        {
            get { return Fields.IsGtrCd[this]; }
            set { Fields.IsGtrCd[this] = value; }
        }

        [DisplayName("Is Dilution Cd"), Column("IS_DILUTION_CD"), Size(1)]
        public String IsDilutionCd
        {
            get { return Fields.IsDilutionCd[this]; }
            set { Fields.IsDilutionCd[this] = value; }
        }

        [DisplayName("Is Cost Cd"), Column("IS_COST_CD"), Size(1)]
        public String IsCostCd
        {
            get { return Fields.IsCostCd[this]; }
            set { Fields.IsCostCd[this] = value; }
        }

        [DisplayName("Is Tax Cd"), Column("IS_TAX_CD"), Size(1)]
        public String IsTaxCd
        {
            get { return Fields.IsTaxCd[this]; }
            set { Fields.IsTaxCd[this] = value; }
        }

        [DisplayName("Is Cc Cost Cd"), Column("IS_CC_COST_CD"), Size(1)]
        public String IsCcCostCd
        {
            get { return Fields.IsCcCostCd[this]; }
            set { Fields.IsCcCostCd[this] = value; }
        }

        [DisplayName("Is Acctg Adj Cd"), Column("IS_ACCTG_ADJ_CD"), Size(1)]
        public String IsAcctgAdjCd
        {
            get { return Fields.IsAcctgAdjCd[this]; }
            set { Fields.IsAcctgAdjCd[this] = value; }
        }

        [DisplayName("Is Pio Cd"), Column("IS_PIO_CD"), Size(1)]
        public String IsPioCd
        {
            get { return Fields.IsPioCd[this]; }
            set { Fields.IsPioCd[this] = value; }
        }

        [DisplayName("Is Group Amenity Cd"), Column("IS_GROUP_AMENITY_CD"), Size(1)]
        public String IsGroupAmenityCd
        {
            get { return Fields.IsGroupAmenityCd[this]; }
            set { Fields.IsGroupAmenityCd[this] = value; }
        }

        [DisplayName("Amenity Cost Amt"), Column("AMENITY_COST_AMT"), Size(38), Scale(4)]
        public Decimal? AmenityCostAmt
        {
            get { return Fields.AmenityCostAmt[this]; }
            set { Fields.AmenityCostAmt[this] = value; }
        }

        [DisplayName("Is Per Diem Cd"), Column("IS_PER_DIEM_CD"), Size(1)]
        public String IsPerDiemCd
        {
            get { return Fields.IsPerDiemCd[this]; }
            set { Fields.IsPerDiemCd[this] = value; }
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

        [DisplayName("Is Acctg Actual Cd"), Column("IS_ACCTG_ACTUAL_CD"), Size(1)]
        public String IsAcctgActualCd
        {
            get { return Fields.IsAcctgActualCd[this]; }
            set { Fields.IsAcctgActualCd[this] = value; }
        }

        [DisplayName("Casino Component Cd"), Column("CASINO_COMPONENT_CD"), Size(30)]
        public String CasinoComponentCd
        {
            get { return Fields.CasinoComponentCd[this]; }
            set { Fields.CasinoComponentCd[this] = value; }
        }

        [DisplayName("Casino Component Desc"), Column("CASINO_COMPONENT_DESC"), Size(50)]
        public String CasinoComponentDesc
        {
            get { return Fields.CasinoComponentDesc[this]; }
            set { Fields.CasinoComponentDesc[this] = value; }
        }

        [DisplayName("Dept Short Desc"), Column("DEPT_SHORT_DESC"), Size(15)]
        public String DeptShortDesc
        {
            get { return Fields.DeptShortDesc[this]; }
            set { Fields.DeptShortDesc[this] = value; }
        }

        [DisplayName("Is Suppress Built Cd"), Column("IS_SUPPRESS_BUILT_CD"), Size(1)]
        public String IsSuppressBuiltCd
        {
            get { return Fields.IsSuppressBuiltCd[this]; }
            set { Fields.IsSuppressBuiltCd[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.InvoiceItemTypeGenNatKey; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.InvoiceClassType1Cd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public InvoiceItemTypeSuppRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field InvoiceItemTypeGenNatKey;
            public StringField InvoiceClassType1Cd;
            public StringField InvoiceClassType2Cd;
            public StringField InvoiceClassType3Cd;
            public StringField InvoiceClassType4Cd;
            public StringField InvoiceItemSourceCd;
            public StringField InvoiceItemTypeCd;
            public StringField InvoiceItemSubTypeCd;
            public StringField InvoiceItemSubType2Cd;
            public StringField InvoiceItemSubType3Cd;
            public StringField ComponentCd;
            public StringField ComponentDesc;
            public StringField ChartOfAccountNbr;
            public StringField CommentsTxt;
            public StringField IsNtrCd;
            public StringField IsGtrCd;
            public StringField IsDilutionCd;
            public StringField IsCostCd;
            public StringField IsTaxCd;
            public StringField IsCcCostCd;
            public StringField IsAcctgAdjCd;
            public StringField IsPioCd;
            public StringField IsGroupAmenityCd;
            public DecimalField AmenityCostAmt;
            public StringField IsPerDiemCd;
            public DateTimeField CreatedTs;
            public StringField CreatedByNam;
            public StringField ModifiedByNam;
            public DateTimeField ModifiedTs;
            public StringField IsAcctgActualCd;
            public StringField CasinoComponentCd;
            public StringField CasinoComponentDesc;
            public StringField DeptShortDesc;
            public StringField IsSuppressBuiltCd;
        }
    }
}
