
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[PS_GL_ACCOUNT_SUPP]")]
    [DisplayName("Ps Gl Account Supp"), InstanceName("Ps Gl Account Supp")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]
    public sealed class PsGlAccountSuppRow : Row, IIdRow, INameRow
    {
        [DisplayName("Account Sur Key"), Column("ACCOUNT_SUR_KEY"), Identity, Visible(false)]
        public Int64? AccountSurKey
        {
            get { return Fields.AccountSurKey[this]; }
            set { Fields.AccountSurKey[this] = value; }
        }

        [DisplayName("Set Id"), Column("SET_ID"), Size(5), NotNull, QuickSearch]
        public String SetId
        {
            get { return Fields.SetId[this]; }
            set { Fields.SetId[this] = value; }
        }

        [DisplayName("Account Id"), Column("ACCOUNT_ID"), Size(10), NotNull]
        public String AccountId
        {
            get { return Fields.AccountId[this]; }
            set { Fields.AccountId[this] = value; }
        }

        [DisplayName("Olap Account Desc"), Column("OLAP_ACCOUNT_DESC"), Size(50)]
        public String OlapAccountDesc
        {
            get { return Fields.OlapAccountDesc[this]; }
            set { Fields.OlapAccountDesc[this] = value; }
        }

        [DisplayName("Gross Cost Cd"), Column("GROSS_COST_CD"), Size(10)]
        public String GrossCostCd
        {
            get { return Fields.GrossCostCd[this]; }
            set { Fields.GrossCostCd[this] = value; }
        }

        [DisplayName("Account Class Type 1 Cd"), Column("ACCOUNT_CLASS_TYPE_1_CD"), Size(100)]
        public String AccountClassType1Cd
        {
            get { return Fields.AccountClassType1Cd[this]; }
            set { Fields.AccountClassType1Cd[this] = value; }
        }

        [DisplayName("Account Class Type 2 Cd"), Column("ACCOUNT_CLASS_TYPE_2_CD"), Size(100)]
        public String AccountClassType2Cd
        {
            get { return Fields.AccountClassType2Cd[this]; }
            set { Fields.AccountClassType2Cd[this] = value; }
        }

        [DisplayName("Account Class Type 3 Cd"), Column("ACCOUNT_CLASS_TYPE_3_CD"), Size(100)]
        public String AccountClassType3Cd
        {
            get { return Fields.AccountClassType3Cd[this]; }
            set { Fields.AccountClassType3Cd[this] = value; }
        }

        [DisplayName("Account Class Type 4 Cd"), Column("ACCOUNT_CLASS_TYPE_4_CD"), Size(100)]
        public String AccountClassType4Cd
        {
            get { return Fields.AccountClassType4Cd[this]; }
            set { Fields.AccountClassType4Cd[this] = value; }
        }

        [DisplayName("Created Ts"), Column("CREATED_TS"), NotNull]
        public DateTime? CreatedTs
        {
            get { return Fields.CreatedTs[this]; }
            set { Fields.CreatedTs[this] = value; }
        }

        [DisplayName("Created By Nam"), Column("CREATED_BY_NAM"), Size(50), NotNull]
        public String CreatedByNam
        {
            get { return Fields.CreatedByNam[this]; }
            set { Fields.CreatedByNam[this] = value; }
        }

        [DisplayName("Modified By Nam"), Column("MODIFIED_BY_NAM"), Size(50)]
        public String ModifiedByNam
        {
            get { return Fields.ModifiedByNam[this]; }
            set { Fields.ModifiedByNam[this] = value; }
        }

        [DisplayName("Modified Ts"), Column("MODIFIED_TS"), NotNull]
        public DateTime? ModifiedTs
        {
            get { return Fields.ModifiedTs[this]; }
            set { Fields.ModifiedTs[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AccountSurKey; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SetId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PsGlAccountSuppRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field AccountSurKey;
            public StringField SetId;
            public StringField AccountId;
            public StringField OlapAccountDesc;
            public StringField GrossCostCd;
            public StringField AccountClassType1Cd;
            public StringField AccountClassType2Cd;
            public StringField AccountClassType3Cd;
            public StringField AccountClassType4Cd;
            public DateTimeField CreatedTs;
            public StringField CreatedByNam;
            public StringField ModifiedByNam;
            public DateTimeField ModifiedTs;
        }
    }
}
