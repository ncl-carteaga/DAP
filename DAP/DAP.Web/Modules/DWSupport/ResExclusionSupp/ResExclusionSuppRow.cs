
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[RES_EXCLUSION_SUPP]")]
    [DisplayName("Res Exclusion Supp"), InstanceName("Res Exclusion Supp")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]

    public sealed class ResExclusionSuppRow : Row, IIdRow, INameRow
    {
        [DisplayName("Res Exclusion Id"), Column("RES_EXCLUSION_ID"), Identity]
        public Int32? ResExclusionId
        {
            get { return Fields.ResExclusionId[this]; }
            set { Fields.ResExclusionId[this] = value; }
        }

        [DisplayName("Res Id"), Column("RES_ID")]
        public Int64? ResId
        {
            get { return Fields.ResId[this]; }
            set { Fields.ResId[this] = value; }
        }

        [DisplayName("From Data As Of Dt"), Column("FROM_DATA_AS_OF_DT")]
        public DateTime? FromDataAsOfDt
        {
            get { return Fields.FromDataAsOfDt[this]; }
            set { Fields.FromDataAsOfDt[this] = value; }
        }

        [DisplayName("To Data As Of Dt"), Column("TO_DATA_AS_OF_DT")]
        public DateTime? ToDataAsOfDt
        {
            get { return Fields.ToDataAsOfDt[this]; }
            set { Fields.ToDataAsOfDt[this] = value; }
        }

        [DisplayName("Comment Txt"), Column("COMMENT_TXT"), Size(800), QuickSearch]
        public String CommentTxt
        {
            get { return Fields.CommentTxt[this]; }
            set { Fields.CommentTxt[this] = value; }
        }

        [DisplayName("Created Ts"), Column("CREATED_TS")]
        public DateTime? CreatedTs
        {
            get { return Fields.CreatedTs[this]; }
            set { Fields.CreatedTs[this] = value; }
        }

        [DisplayName("Created By Nam"), Column("CREATED_BY_NAM"), Size(50)]
        public String CreatedByNam
        {
            get { return Fields.CreatedByNam[this]; }
            set { Fields.CreatedByNam[this] = value; }
        }

        [DisplayName("Modified Ts"), Column("MODIFIED_TS")]
        public DateTime? ModifiedTs
        {
            get { return Fields.ModifiedTs[this]; }
            set { Fields.ModifiedTs[this] = value; }
        }

        [DisplayName("Modified By Nam"), Column("MODIFIED_BY_NAM"), Size(50)]
        public String ModifiedByNam
        {
            get { return Fields.ModifiedByNam[this]; }
            set { Fields.ModifiedByNam[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ResExclusionId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CommentTxt; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ResExclusionSuppRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ResExclusionId;
            public Int64Field ResId;
            public DateTimeField FromDataAsOfDt;
            public DateTimeField ToDataAsOfDt;
            public StringField CommentTxt;
            public DateTimeField CreatedTs;
            public StringField CreatedByNam;
            public DateTimeField ModifiedTs;
            public StringField ModifiedByNam;
        }
    }
}
