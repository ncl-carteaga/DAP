namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[SAILING_EXCLUSION_SUPP]")]
    [DisplayName("Sailing Exclusion Supp"), InstanceName("Sailing Exclusion Supp")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]

    public sealed class SailingExclusionSuppRow : Row, IIdRow, INameRow
    {
        [DisplayName("Sailing Exclusion Id"), Column("SAILING_EXCLUSION_ID"), Identity]
        public Int32? SailingExclusionId
        {
            get { return Fields.SailingExclusionId[this]; }
            set { Fields.SailingExclusionId[this] = value; }
        }

        [DisplayName("Ship Cd"), Column("SHIP_CD"), Size(3), NotNull, QuickSearch, LookupEditor(typeof(ShipRow))]
        public String ShipCd
        {
            get { return Fields.ShipCd[this]; }
            set { Fields.ShipCd[this] = value; }
        }

        [DisplayName("Main Sail Id"), Column("MAIN_SAIL_ID"), NotNull]
        public Int32? MainSailId
        {
            get { return Fields.MainSailId[this]; }
            set { Fields.MainSailId[this] = value; }
        }

        [DisplayName("Main Sail Dt"), Column("MAIN_SAIL_DT"), NotNull]
        public DateTime? MainSailDt
        {
            get { return Fields.MainSailDt[this]; }
            set { Fields.MainSailDt[this] = value; }
        }

        [DisplayName("Main Voyage Cd"), Column("MAIN_VOYAGE_CD"), Size(50), NotNull]
        public String MainVoyageCd
        {
            get { return Fields.MainVoyageCd[this]; }
            set { Fields.MainVoyageCd[this] = value; }
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

        [DisplayName("Comment Txt"), Column("COMMENT_TXT"), Size(799)]
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
            get { return Fields.SailingExclusionId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ShipCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SailingExclusionSuppRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SailingExclusionId;
            public StringField ShipCd;
            public Int32Field MainSailId;
            public DateTimeField MainSailDt;
            public StringField MainVoyageCd;
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
