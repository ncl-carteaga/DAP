
namespace DAP.PCHODSNVS.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PCH_ODS_NVS"), Module("PCHODSNVS"), TableName("[dap].[supp_key_acct_target]")]
    [DisplayName("Supp Key Acct Target"), InstanceName("Supp Key Acct Target")]
    [ReadPermission(PermissionKeys.KeyAcctTarget)]
    [ModifyPermission(PermissionKeys.KeyAcctTarget)]
    [DataAuditLog]
    public sealed class SuppKeyAcctTargetRow : Row, IIdRow, INameRow
    {
        [DisplayName("Key Acct Tk"), Column("key_acct_tk"), Identity,Visible(false)]
        public Int32? KeyAcctTk
        {
            get { return Fields.KeyAcctTk[this]; }
            set { Fields.KeyAcctTk[this] = value; }
        }

        [DisplayName("Company Cd"), Column("Company_cd")]
        public Double? CompanyCd
        {
            get { return Fields.CompanyCd[this]; }
            set { Fields.CompanyCd[this] = value; }
        }

        [DisplayName("Key Acct Link"), Column("key_acct_link"), Size(100), QuickSearch]
        public String KeyAcctLink
        {
            get { return Fields.KeyAcctLink[this]; }
            set { Fields.KeyAcctLink[this] = value; }
        }

        [DisplayName("Account Type"), Column("Account_Type"), Size(100)]
        public String AccountType
        {
            get { return Fields.AccountType[this]; }
            set { Fields.AccountType[this] = value; }
        }

        [DisplayName("Ccf Target Q1"), Column("ccf_target_Q1"), Size(18), Scale(4)]
        public Decimal? CcfTargetQ1
        {
            get { return Fields.CcfTargetQ1[this]; }
            set { Fields.CcfTargetQ1[this] = value; }
        }

        [DisplayName("Ccf Target Q12"), Column("ccf_target_Q12"), Size(18), Scale(4)]
        public Decimal? CcfTargetQ12
        {
            get { return Fields.CcfTargetQ12[this]; }
            set { Fields.CcfTargetQ12[this] = value; }
        }

        [DisplayName("Ccf Target Q13"), Column("ccf_target_Q13"), Size(18), Scale(4)]
        public Decimal? CcfTargetQ13
        {
            get { return Fields.CcfTargetQ13[this]; }
            set { Fields.CcfTargetQ13[this] = value; }
        }

        [DisplayName("Ccf Target Q14"), Column("ccf_target_Q14"), Size(18), Scale(4)]
        public Decimal? CcfTargetQ14
        {
            get { return Fields.CcfTargetQ14[this]; }
            set { Fields.CcfTargetQ14[this] = value; }
        }

        [DisplayName("Ccf Target Q15"), Column("ccf_target_Q15"), Size(18), Scale(4)]
        public Decimal? CcfTargetQ15
        {
            get { return Fields.CcfTargetQ15[this]; }
            set { Fields.CcfTargetQ15[this] = value; }
        }

        [DisplayName("Ccf Target Q2"), Column("ccf_target_Q2"), Size(18), Scale(4)]
        public Decimal? CcfTargetQ2
        {
            get { return Fields.CcfTargetQ2[this]; }
            set { Fields.CcfTargetQ2[this] = value; }
        }

        [DisplayName("Ccf Target Q22"), Column("ccf_target_Q22"), Size(18), Scale(4)]
        public Decimal? CcfTargetQ22
        {
            get { return Fields.CcfTargetQ22[this]; }
            set { Fields.CcfTargetQ22[this] = value; }
        }

        [DisplayName("Ccf Target Q23"), Column("ccf_target_Q23"), Size(18), Scale(4)]
        public Decimal? CcfTargetQ23
        {
            get { return Fields.CcfTargetQ23[this]; }
            set { Fields.CcfTargetQ23[this] = value; }
        }

        [DisplayName("Ccf Target Q24"), Column("ccf_target_Q24"), Size(18), Scale(4)]
        public Decimal? CcfTargetQ24
        {
            get { return Fields.CcfTargetQ24[this]; }
            set { Fields.CcfTargetQ24[this] = value; }
        }

        [DisplayName("Ccf Target Q25"), Column("ccf_target_Q25"), Size(18), Scale(4)]
        public Decimal? CcfTargetQ25
        {
            get { return Fields.CcfTargetQ25[this]; }
            set { Fields.CcfTargetQ25[this] = value; }
        }

        [DisplayName("Ccf Target Q3"), Column("ccf_target_Q3"), Size(18), Scale(4)]
        public Decimal? CcfTargetQ3
        {
            get { return Fields.CcfTargetQ3[this]; }
            set { Fields.CcfTargetQ3[this] = value; }
        }

        [DisplayName("Ccf Target Q32"), Column("ccf_target_Q32"), Size(18), Scale(4)]
        public Decimal? CcfTargetQ32
        {
            get { return Fields.CcfTargetQ32[this]; }
            set { Fields.CcfTargetQ32[this] = value; }
        }

        [DisplayName("Ccf Target Q33"), Column("ccf_target_Q33"), Size(18), Scale(4)]
        public Decimal? CcfTargetQ33
        {
            get { return Fields.CcfTargetQ33[this]; }
            set { Fields.CcfTargetQ33[this] = value; }
        }

        [DisplayName("Ccf Target Q34"), Column("ccf_target_Q34"), Size(18), Scale(4)]
        public Decimal? CcfTargetQ34
        {
            get { return Fields.CcfTargetQ34[this]; }
            set { Fields.CcfTargetQ34[this] = value; }
        }

        [DisplayName("Ccf Target Q35"), Column("ccf_target_Q35"), Size(18), Scale(4)]
        public Decimal? CcfTargetQ35
        {
            get { return Fields.CcfTargetQ35[this]; }
            set { Fields.CcfTargetQ35[this] = value; }
        }

        [DisplayName("Ccf Target Q4"), Column("ccf_target_Q4"), Size(18), Scale(4)]
        public Decimal? CcfTargetQ4
        {
            get { return Fields.CcfTargetQ4[this]; }
            set { Fields.CcfTargetQ4[this] = value; }
        }

        [DisplayName("Ccf Target Q42"), Column("ccf_target_Q42"), Size(18), Scale(4)]
        public Decimal? CcfTargetQ42
        {
            get { return Fields.CcfTargetQ42[this]; }
            set { Fields.CcfTargetQ42[this] = value; }
        }

        [DisplayName("Ccf Target Q43"), Column("ccf_target_Q43"), Size(18), Scale(4)]
        public Decimal? CcfTargetQ43
        {
            get { return Fields.CcfTargetQ43[this]; }
            set { Fields.CcfTargetQ43[this] = value; }
        }

        [DisplayName("Ccf Target Q44"), Column("ccf_target_Q44"), Size(18), Scale(4)]
        public Decimal? CcfTargetQ44
        {
            get { return Fields.CcfTargetQ44[this]; }
            set { Fields.CcfTargetQ44[this] = value; }
        }

        [DisplayName("Ccf Target Q45"), Column("ccf_target_Q45"), Size(18), Scale(4)]
        public Decimal? CcfTargetQ45
        {
            get { return Fields.CcfTargetQ45[this]; }
            set { Fields.CcfTargetQ45[this] = value; }
        }

        [DisplayName("Prct Target Q1"), Column("prct_target_Q1"), Size(18), Scale(4)]
        public Decimal? PrctTargetQ1
        {
            get { return Fields.PrctTargetQ1[this]; }
            set { Fields.PrctTargetQ1[this] = value; }
        }

        [DisplayName("Prct Target Q12"), Column("prct_target_Q12"), Size(18), Scale(4)]
        public Decimal? PrctTargetQ12
        {
            get { return Fields.PrctTargetQ12[this]; }
            set { Fields.PrctTargetQ12[this] = value; }
        }

        [DisplayName("Prct Target Q13"), Column("prct_target_Q13"), Size(18), Scale(4)]
        public Decimal? PrctTargetQ13
        {
            get { return Fields.PrctTargetQ13[this]; }
            set { Fields.PrctTargetQ13[this] = value; }
        }

        [DisplayName("Prct Target Q14"), Column("prct_target_Q14"), Size(18), Scale(4)]
        public Decimal? PrctTargetQ14
        {
            get { return Fields.PrctTargetQ14[this]; }
            set { Fields.PrctTargetQ14[this] = value; }
        }

        [DisplayName("Prct Target Q15"), Column("prct_target_Q15"), Size(18), Scale(4)]
        public Decimal? PrctTargetQ15
        {
            get { return Fields.PrctTargetQ15[this]; }
            set { Fields.PrctTargetQ15[this] = value; }
        }

        [DisplayName("Prct Target Q2"), Column("prct_target_Q2"), Size(18), Scale(4)]
        public Decimal? PrctTargetQ2
        {
            get { return Fields.PrctTargetQ2[this]; }
            set { Fields.PrctTargetQ2[this] = value; }
        }

        [DisplayName("Prct Target Q22"), Column("prct_target_Q22"), Size(18), Scale(4)]
        public Decimal? PrctTargetQ22
        {
            get { return Fields.PrctTargetQ22[this]; }
            set { Fields.PrctTargetQ22[this] = value; }
        }

        [DisplayName("Prct Target Q23"), Column("prct_target_Q23"), Size(18), Scale(4)]
        public Decimal? PrctTargetQ23
        {
            get { return Fields.PrctTargetQ23[this]; }
            set { Fields.PrctTargetQ23[this] = value; }
        }

        [DisplayName("Prct Target Q24"), Column("prct_target_Q24"), Size(18), Scale(4)]
        public Decimal? PrctTargetQ24
        {
            get { return Fields.PrctTargetQ24[this]; }
            set { Fields.PrctTargetQ24[this] = value; }
        }

        [DisplayName("Prct Target Q25"), Column("prct_target_Q25"), Size(18), Scale(4)]
        public Decimal? PrctTargetQ25
        {
            get { return Fields.PrctTargetQ25[this]; }
            set { Fields.PrctTargetQ25[this] = value; }
        }

        [DisplayName("Prct Target Q3"), Column("prct_target_Q3"), Size(18), Scale(4)]
        public Decimal? PrctTargetQ3
        {
            get { return Fields.PrctTargetQ3[this]; }
            set { Fields.PrctTargetQ3[this] = value; }
        }

        [DisplayName("Prct Target Q32"), Column("prct_target_Q32"), Size(18), Scale(4)]
        public Decimal? PrctTargetQ32
        {
            get { return Fields.PrctTargetQ32[this]; }
            set { Fields.PrctTargetQ32[this] = value; }
        }

        [DisplayName("Prct Target Q33"), Column("prct_target_Q33"), Size(18), Scale(4)]
        public Decimal? PrctTargetQ33
        {
            get { return Fields.PrctTargetQ33[this]; }
            set { Fields.PrctTargetQ33[this] = value; }
        }

        [DisplayName("Prct Target Q34"), Column("prct_target_Q34"), Size(18), Scale(4)]
        public Decimal? PrctTargetQ34
        {
            get { return Fields.PrctTargetQ34[this]; }
            set { Fields.PrctTargetQ34[this] = value; }
        }

        [DisplayName("Prct Target Q35"), Column("prct_target_Q35"), Size(18), Scale(4)]
        public Decimal? PrctTargetQ35
        {
            get { return Fields.PrctTargetQ35[this]; }
            set { Fields.PrctTargetQ35[this] = value; }
        }

        [DisplayName("Prct Target Q4"), Column("prct_target_Q4"), Size(18), Scale(4)]
        public Decimal? PrctTargetQ4
        {
            get { return Fields.PrctTargetQ4[this]; }
            set { Fields.PrctTargetQ4[this] = value; }
        }

        [DisplayName("Prct Target Q42"), Column("prct_target_Q42"), Size(18), Scale(4)]
        public Decimal? PrctTargetQ42
        {
            get { return Fields.PrctTargetQ42[this]; }
            set { Fields.PrctTargetQ42[this] = value; }
        }

        [DisplayName("Prct Target Q43"), Column("prct_target_Q43"), Size(18), Scale(4)]
        public Decimal? PrctTargetQ43
        {
            get { return Fields.PrctTargetQ43[this]; }
            set { Fields.PrctTargetQ43[this] = value; }
        }

        [DisplayName("Prct Target Q44"), Column("prct_target_Q44"), Size(18), Scale(4)]
        public Decimal? PrctTargetQ44
        {
            get { return Fields.PrctTargetQ44[this]; }
            set { Fields.PrctTargetQ44[this] = value; }
        }

        [DisplayName("Prct Target Q45"), Column("prct_target_Q45"), Size(18), Scale(4)]
        public Decimal? PrctTargetQ45
        {
            get { return Fields.PrctTargetQ45[this]; }
            set { Fields.PrctTargetQ45[this] = value; }
        }

        [DisplayName("Load Dt"), Column("load_dt")]
        public DateTime? LoadDt
        {
            get { return Fields.LoadDt[this]; }
            set { Fields.LoadDt[this] = value; }
        }

        [DisplayName("Year"), Column("Year"), Updatable(false)]
        public Int16? Year
        {
            get { return Fields.Year[this]; }
            set { Fields.Year[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.KeyAcctTk; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.KeyAcctLink; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SuppKeyAcctTargetRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field KeyAcctTk;
            public DoubleField CompanyCd;
            public Int16Field Year;
            public StringField KeyAcctLink;
            public StringField AccountType;
            public DecimalField CcfTargetQ1;
            public DecimalField CcfTargetQ12;
            public DecimalField CcfTargetQ13;
            public DecimalField CcfTargetQ14;
            public DecimalField CcfTargetQ15;
            public DecimalField CcfTargetQ2;
            public DecimalField CcfTargetQ22;
            public DecimalField CcfTargetQ23;
            public DecimalField CcfTargetQ24;
            public DecimalField CcfTargetQ25;
            public DecimalField CcfTargetQ3;
            public DecimalField CcfTargetQ32;
            public DecimalField CcfTargetQ33;
            public DecimalField CcfTargetQ34;
            public DecimalField CcfTargetQ35;
            public DecimalField CcfTargetQ4;
            public DecimalField CcfTargetQ42;
            public DecimalField CcfTargetQ43;
            public DecimalField CcfTargetQ44;
            public DecimalField CcfTargetQ45;
            public DecimalField PrctTargetQ1;
            public DecimalField PrctTargetQ12;
            public DecimalField PrctTargetQ13;
            public DecimalField PrctTargetQ14;
            public DecimalField PrctTargetQ15;
            public DecimalField PrctTargetQ2;
            public DecimalField PrctTargetQ22;
            public DecimalField PrctTargetQ23;
            public DecimalField PrctTargetQ24;
            public DecimalField PrctTargetQ25;
            public DecimalField PrctTargetQ3;
            public DecimalField PrctTargetQ32;
            public DecimalField PrctTargetQ33;
            public DecimalField PrctTargetQ34;
            public DecimalField PrctTargetQ35;
            public DecimalField PrctTargetQ4;
            public DecimalField PrctTargetQ42;
            public DecimalField PrctTargetQ43;
            public DecimalField PrctTargetQ44;
            public DecimalField PrctTargetQ45;
            public DateTimeField LoadDt;
        }
    }
}
