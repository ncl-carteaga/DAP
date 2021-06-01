
namespace DAP.PCHODSNVS.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PCH_ODS_NVS"), Module("PCHODSNVS"), TableName("[dap].[GSA_distribution_list]")]
    [DisplayName("GSA Distribution List"), InstanceName("Gsa Distribution List")]
    [ReadPermission(PermissionKeys.Finance.View)]
    [ModifyPermission(PermissionKeys.Finance.Modify)]
    [DeletePermission(PermissionKeys.Finance.Delete)]
    [DataAuditLog]
    public sealed class GsaDistributionListRow : Row, IIdRow, INameRow
    {
        [DisplayName("Gsa Distribution List Tk"), Column("GSA_Distribution_List_tk"), Identity, Visible(false)]
        public Int32? GsaDistributionListTk
        {
            get { return Fields.GsaDistributionListTk[this]; }
            set { Fields.GsaDistributionListTk[this] = value; }
        }

        [DisplayName("Company Cd"), Column("Company_cd"), Size(3), NotNull]
        public String CompanyCd
        {
            get { return Fields.CompanyCd[this]; }
            set { Fields.CompanyCd[this] = value; }
        }

        [DisplayName("Agency Cd"), Column("Agency_Cd"), Size(6), NotNull, LookupEditor("PCHODSNVS.Agency"), QuickSearch]
        public String AgencyCd
        {
            get { return Fields.AgencyCd[this]; }
            set { Fields.AgencyCd[this] = value; }
        }

        [DisplayName("Account Name"), Column("Account_Name"), Size(250), NotNull, QuickSearch]
        public String AccountName
        {
            get { return Fields.AccountName[this]; }
            set { Fields.AccountName[this] = value; }
        }

        [DisplayName("Contact Name"), Column("Contact_Name"), Size(250)]
        public String ContactName
        {
            get { return Fields.ContactName[this]; }
            set { Fields.ContactName[this] = value; }
        }

        [DisplayName("Email"), Column("email"), Size(500), NotNull]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Load Dt"), Column("load_dt")]
        public DateTime? LoadDt
        {
            get { return Fields.LoadDt[this]; }
            set { Fields.LoadDt[this] = value; }
        }




        IIdField IIdRow.IdField
        {
            get { return Fields.GsaDistributionListTk; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CompanyCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public GsaDistributionListRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field GsaDistributionListTk;
            public StringField CompanyCd;
            public StringField AgencyCd;
            public StringField AccountName;
            public StringField ContactName;
            public StringField Email;
            public DateTimeField LoadDt;

        }
    }
}
