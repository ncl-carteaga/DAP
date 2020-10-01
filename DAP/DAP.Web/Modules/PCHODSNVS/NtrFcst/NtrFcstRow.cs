
namespace DAP.PCHODSNVS.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PCH_ODS_NVS"), Module("PCHODSNVS"), TableName("[dbo].[ntr_fcst]")]
    [DisplayName("Ntr Fcst"), InstanceName("Ntr Fcst")]
    [ReadPermission(PermissionKeys.Finance.View)]
    [ModifyPermission(PermissionKeys.Finance.Modify)]
    [DeletePermission(PermissionKeys.Finance.Delete)]
    [DataAuditLog]
    public sealed class NtrFcstRow : Row, IIdRow, INameRow
    {
        [DisplayName("Company Cd"), Column("company_cd"), Size(3), NotNull, QuickSearch]
        public String CompanyCd
        {
            get { return Fields.CompanyCd[this]; }
            set { Fields.CompanyCd[this] = value; }
        }

        [DisplayName("Account Period Num"), Column("account_period_num"), Size(255), NotNull]
        public String AccountPeriodNum
        {
            get { return Fields.AccountPeriodNum[this]; }
            set { Fields.AccountPeriodNum[this] = value; }
        }

        [DisplayName("Ntr Fcst"), Column("ntr_fcst")]
        public Double? NtrFcst
        {
            get { return Fields.NtrFcst[this]; }
            set { Fields.NtrFcst[this] = value; }
        }

        [DisplayName("Pds Fcst Total"), Column("pds_fcst_total")]
        public Double? PdsFcstTotal
        {
            get { return Fields.PdsFcstTotal[this]; }
            set { Fields.PdsFcstTotal[this] = value; }
        }

        [DisplayName("Apcd Final"), Column("apcd_final")]
        public Double? ApcdFinal
        {
            get { return Fields.ApcdFinal[this]; }
            set { Fields.ApcdFinal[this] = value; }
        }

        [DisplayName("Ntr Financial Budget"), Column("ntr_financial_budget"), Size(12), Scale(4)]
        public Decimal? NtrFinancialBudget
        {
            get { return Fields.NtrFinancialBudget[this]; }
            set { Fields.NtrFinancialBudget[this] = value; }
        }

        [DisplayName("Fcst Tk"), Column("fcst_tk"), Identity, Visible(false)]
        public Int32? FcstTk
        {
            get { return Fields.FcstTk[this]; }
            set { Fields.FcstTk[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.FcstTk; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CompanyCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public NtrFcstRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField CompanyCd;
            public StringField AccountPeriodNum;
            public DoubleField NtrFcst;
            public DoubleField PdsFcstTotal;
            public DoubleField ApcdFinal;
            public DecimalField NtrFinancialBudget;
            public Int32Field FcstTk;
        }
    }
}
