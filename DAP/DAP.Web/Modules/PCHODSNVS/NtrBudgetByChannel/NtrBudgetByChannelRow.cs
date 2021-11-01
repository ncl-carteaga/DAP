
namespace DAP.PCHODSNVS.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PCH_ODS_NVS"), Module("PCHODSNVS"), TableName("[dbo].[ntr_budget_by_channel]")]
    [DisplayName("Ntr Budget By Channel"), InstanceName("Ntr Budget By Channel")]
    [ReadPermission(PermissionKeys.Finance.View)]
    [ModifyPermission(PermissionKeys.Finance.Modify)]
    [DeletePermission(PermissionKeys.Finance.Delete)]
    [DataAuditLog]
    public sealed class NtrBudgetByChannelRow : Row, IIdRow, INameRow
    {
        [DisplayName("Company Cd"), Column("company_cd"), Size(3), QuickSearch, DAP.PCHODS.CompanyEditor]
        public String CompanyCd
        {
            get { return Fields.CompanyCd[this]; }
            set { Fields.CompanyCd[this] = value; }
        }

        [DisplayName("Accounting Year"), Column("accounting_year"), SortOrder(1, descending: true)]
        public Int32? AccountingYear
        {
            get { return Fields.AccountingYear[this]; }
            set { Fields.AccountingYear[this] = value; }
        }

        [DisplayName("Channel Summ Desc"), Column("channel_summ_desc"), Size(25)]
        public String ChannelSummDesc
        {
            get { return Fields.ChannelSummDesc[this]; }
            set { Fields.ChannelSummDesc[this] = value; }
        }

        [DisplayName("Channel Desc"), Column("channel_desc"), Size(50)]
        public String ChannelDesc
        {
            get { return Fields.ChannelDesc[this]; }
            set { Fields.ChannelDesc[this] = value; }
        }

        [DisplayName("Ntr Budget"), Column("ntr_budget"), Size(18), Scale(4)]
        public Decimal? NtrBudget
        {
            get { return Fields.NtrBudget[this]; }
            set { Fields.NtrBudget[this] = value; }
        }

        [DisplayName("Pds Budget Total"), Column("pds_budget_total"), Size(18), Scale(4)]
        public Decimal? PdsBudgetTotal
        {
            get { return Fields.PdsBudgetTotal[this]; }
            set { Fields.PdsBudgetTotal[this] = value; }
        }

        [DisplayName("Npd Budget"), Column("npd_budget"), Size(18), Scale(4)]
        public Decimal? NpdBudget
        {
            get { return Fields.NpdBudget[this]; }
            set { Fields.NpdBudget[this] = value; }
        }

        [DisplayName("Budgetbychannel Tk"), Column("budgetbychannel_tk"), Identity, Visible(false)]
        public Int32? BudgetbychannelTk
        {
            get { return Fields.BudgetbychannelTk[this]; }
            set { Fields.BudgetbychannelTk[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.BudgetbychannelTk; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CompanyCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public NtrBudgetByChannelRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField CompanyCd;
            public Int32Field AccountingYear;
            public StringField ChannelSummDesc;
            public StringField ChannelDesc;
            public DecimalField NtrBudget;
            public DecimalField PdsBudgetTotal;
            public DecimalField NpdBudget;
            public Int32Field BudgetbychannelTk;
        }
    }
}
