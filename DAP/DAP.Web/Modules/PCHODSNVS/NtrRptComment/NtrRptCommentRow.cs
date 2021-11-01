
namespace DAP.PCHODSNVS.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PCH_ODS_NVS"), Module("PCHODSNVS"), TableName("[dbo].[ntr_rpt_comment]")]
    [DisplayName("Ntr Rpt Comment"), InstanceName("Ntr Rpt Comment")]
    [ReadPermission(PermissionKeys.Finance.View)]
    [ModifyPermission(PermissionKeys.Finance.Modify)]
    [DeletePermission(PermissionKeys.Finance.Delete)]
    [DataAuditLog]
    public sealed class NtrRptCommentRow : Row, IIdRow, INameRow
    {
        [DisplayName("Comment Tk"), Column("comment_tk"), Identity, Visible(false)]
        public Int32? CommentTk
        {
            get { return Fields.CommentTk[this]; }
            set { Fields.CommentTk[this] = value; }
        }

        [DisplayName("Company Cd"), Column("company_cd"), Size(3), QuickSearch, Updatable(false), DAP.PCHODS.CompanyEditor]
        public String CompanyCd
        {
            get { return Fields.CompanyCd[this]; }
            set { Fields.CompanyCd[this] = value; }
        }

        [DisplayName("Report Date"), Column("report_date"), SortOrder(1, descending: true)]
        public DateTime? ReportDate
        {
            get { return Fields.ReportDate[this]; }
            set { Fields.ReportDate[this] = value; }
        }

        [DisplayName("Comment"), Column("comment"), Size(8000)]
        public String Comment
        {
            get { return Fields.Comment[this]; }
            set { Fields.Comment[this] = value; }
        }

        [DisplayName("Account Period Num"), Column("account_period_num"), Size(10)]
        public String AccountPeriodNum
        {
            get { return Fields.AccountPeriodNum[this]; }
            set { Fields.AccountPeriodNum[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CommentTk; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CompanyCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public NtrRptCommentRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CommentTk;
            public StringField CompanyCd;
            public DateTimeField ReportDate;
            public StringField Comment;
            public StringField AccountPeriodNum;
        }
    }
}
