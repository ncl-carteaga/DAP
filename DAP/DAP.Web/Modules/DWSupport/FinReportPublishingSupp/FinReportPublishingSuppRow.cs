
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[FIN_REPORT_PUBLISHING_SUPP]")]
    [DisplayName("Financial Report Publishing"), InstanceName("Fin Report Publishing Supp")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [DataAuditLog]
    public sealed class FinReportPublishingSuppRow : Row, IIdRow, INameRow
    {
        [DisplayName("Fin Report Publishing Sur Key"), Column("FIN_REPORT_PUBLISHING_SUR_KEY"), Identity, Visible(false)]
        public Int32? FinReportPublishingSurKey
        {
            get { return Fields.FinReportPublishingSurKey[this]; }
            set { Fields.FinReportPublishingSurKey[this] = value; }
        }

        [DisplayName("Publish Date"), Column("PUBLISH_DAT"), NotNull, EditLink]
        public DateTime? PublishDat
        {
            get { return Fields.PublishDat[this]; }
            set { Fields.PublishDat[this] = value; }
        }

        [DisplayName("Publish Report"), Column("PUBLISH_CD"), NotNull]
        public Boolean? PublishCd
        {
            get { return Fields.PublishCd[this]; }
            set { Fields.PublishCd[this] = value; }
        }

        [DisplayName("Publish Comments"), Column("PUBLISH_COMMENTS_TXT"), Size(500), QuickSearch]
        public String PublishCommentsTxt
        {
            get { return Fields.PublishCommentsTxt[this]; }
            set { Fields.PublishCommentsTxt[this] = value; }
        }

        [DisplayName("Created Date"), Column("CREATED_TS"), NotNull, Updatable(false), Insertable(false)]
        public DateTime? CreatedTs
        {
            get { return Fields.CreatedTs[this]; }
            set { Fields.CreatedTs[this] = value; }
        }

        [DisplayName("Created By"), Column("CREATED_BY_NAM"), Size(50), NotNull, Updatable(false), Insertable(false)]
        public String CreatedByNam
        {
            get { return Fields.CreatedByNam[this]; }
            set { Fields.CreatedByNam[this] = value; }
        }

        [DisplayName("Modified Date"), Column("MODIFIED_TS"), Updatable(false), Insertable(false)]
        public DateTime? ModifiedTs
        {
            get { return Fields.ModifiedTs[this]; }
            set { Fields.ModifiedTs[this] = value; }
        }

        [DisplayName("Modified By"), Column("MODIFIED_BY_NAM"), Size(50), Updatable(false), Insertable(false)]
        public String ModifiedByNam
        {
            get { return Fields.ModifiedByNam[this]; }
            set { Fields.ModifiedByNam[this] = value; }
        }

        [DisplayName("Modified Date"), Column("PROCESSEDDATE_TS"), Visible(false)]
        public DateTime? ProcessedDateTs
        {
            get { return Fields.ProcessedDateTs[this]; }
            set { Fields.ProcessedDateTs[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.FinReportPublishingSurKey; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PublishCommentsTxt; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FinReportPublishingSuppRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field FinReportPublishingSurKey;
            public DateTimeField PublishDat;
            public BooleanField PublishCd;
            public StringField PublishCommentsTxt;
            public DateTimeField CreatedTs;
            public StringField CreatedByNam;
            public DateTimeField ModifiedTs;
            public StringField ModifiedByNam;
            public DateTimeField ProcessedDateTs;
        }
    }
}
