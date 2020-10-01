
namespace DAP.PCHODSNVS.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PCH_ODS_NVS"), Module("PCHODSNVS"), TableName("[dbo].[ntr_budget]")]
    [DisplayName("Ntr Budget"), InstanceName("Ntr Budget")]
    [ReadPermission(PermissionKeys.Finance.View)]
    [ModifyPermission(PermissionKeys.Finance.Modify)]
    [DeletePermission(PermissionKeys.Finance.Delete)]
    [DataAuditLog]
    public sealed class NtrBudgetRow : Row, IIdRow, INameRow
    {
        [DisplayName("Company Cd"), Column("company_cd"), Size(3), PrimaryKey, QuickSearch]
        public String CompanyCd
        {
            get { return Fields.CompanyCd[this]; }
            set { Fields.CompanyCd[this] = value; }
        }

        [DisplayName("Account Period Num"), Column("account_period_num"), Size(255), PrimaryKey]
        public String AccountPeriodNum
        {
            get { return Fields.AccountPeriodNum[this]; }
            set { Fields.AccountPeriodNum[this] = value; }
        }

        [DisplayName("Ntr Budget"), Column("ntr_budget")]
        public Double? NtrBudget
        {
            get { return Fields.NtrBudget[this]; }
            set { Fields.NtrBudget[this] = value; }
        }

        [DisplayName("Pds Budget Total"), Column("pds_budget_total")]
        public Double? PdsBudgetTotal
        {
            get { return Fields.PdsBudgetTotal[this]; }
            set { Fields.PdsBudgetTotal[this] = value; }
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

        [DisplayName("Budget Tk"), Column("budget_tk"), Identity, Visible(false)]
        public Int32? BudgetTk
        {
            get { return Fields.BudgetTk[this]; }
            set { Fields.BudgetTk[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.BudgetTk; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CompanyCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public NtrBudgetRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField CompanyCd;
            public StringField AccountPeriodNum;
            public DoubleField NtrBudget;
            public DoubleField PdsBudgetTotal;
            public DoubleField ApcdFinal;
            public DecimalField NtrFinancialBudget;
            public Int32Field BudgetTk;
        }
    }
}
