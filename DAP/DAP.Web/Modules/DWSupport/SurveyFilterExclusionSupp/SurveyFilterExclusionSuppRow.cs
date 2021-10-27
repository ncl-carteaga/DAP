
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[SURVEY_FILTER_EXCLUSION_SUPP]")]
    [DisplayName("Survey Filter Exclusion Supp"), InstanceName("Survey Filter Exclusion Supp")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]
    public sealed class SurveyFilterExclusionSuppRow : Row, IIdRow, INameRow
    {
        [DisplayName("Survey Exclusion Sur Key"), Column("SURVEY_EXCLUSION_SUR_KEY"), PrimaryKey, Visible(false)]
        public Int64? SurveyExclusionSurKey
        {
            get { return Fields.SurveyExclusionSurKey[this]; }
            set { Fields.SurveyExclusionSurKey[this] = value; }
        }

        [DisplayName("Survey Exclusion Id"), Column("SURVEY_EXCLUSION_ID"), Updatable(false), Insertable(false)]
        public Int64? SurveyExclusionId
        {
            get { return Fields.SurveyExclusionId[this]; }
            set { Fields.SurveyExclusionId[this] = value; }
        }

        [DisplayName("Reason Desc"), Column("REASON_DESC"), Size(200), QuickSearch]
        public String ReasonDesc
        {
            get { return Fields.ReasonDesc[this]; }
            set { Fields.ReasonDesc[this] = value; }
        }

        [DisplayName("Comments Txt"), Column("COMMENTS_TXT"), Size(400)]
        public String CommentsTxt
        {
            get { return Fields.CommentsTxt[this]; }
            set { Fields.CommentsTxt[this] = value; }
        }

        [DisplayName("Sail Id"), Column("SAIL_ID")]
        public Int32? SailId
        {
            get { return Fields.SailId[this]; }
            set { Fields.SailId[this] = value; }
        }

        [DisplayName("Guest Id"), Column("GUEST_ID")]
        public Int32? GuestId
        {
            get { return Fields.GuestId[this]; }
            set { Fields.GuestId[this] = value; }
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

        [DisplayName("Modified By Nam"), Column("MODIFIED_BY_NAM"), Size(50)]
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

        IIdField IIdRow.IdField
        {
            get { return Fields.SurveyExclusionSurKey; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ReasonDesc; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SurveyFilterExclusionSuppRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field SurveyExclusionSurKey;
            public Int64Field SurveyExclusionId;
            public StringField ReasonDesc;
            public StringField CommentsTxt;
            public Int32Field SailId;
            public Int32Field GuestId;
            public DateTimeField CreatedTs;
            public StringField CreatedByNam;
            public StringField ModifiedByNam;
            public DateTimeField ModifiedTs;
        }
    }
}
