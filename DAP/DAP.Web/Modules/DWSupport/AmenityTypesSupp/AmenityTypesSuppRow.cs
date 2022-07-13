
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[AMENITY_TYPES_SUPP]")]
    [DisplayName("Amenity Types Supp"), InstanceName("Amenity Types Supp")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [LookupScript("DWSupport.AmenityType")]
    public sealed class AmenityTypesSuppRow : Row, IIdRow, INameRow
    {
        [DisplayName("Amenity Type Id"), Column("AMENITY_TYPE_ID"), Identity]
        public Int64? AmenityTypeId
        {
            get { return Fields.AmenityTypeId[this]; }
            set { Fields.AmenityTypeId[this] = value; }
        }

        [DisplayName("Amenity Type Cd"), Column("AMENITY_TYPE_CD"), Size(30), NotNull, QuickSearch, LookupInclude]
        public String AmenityTypeCd
        {
            get { return Fields.AmenityTypeCd[this]; }
            set { Fields.AmenityTypeCd[this] = value; }
        }

        [DisplayName("Amenity Type Desc"), Column("AMENITY_TYPE_DESC"), Size(4000)]
        public String AmenityTypeDesc
        {
            get { return Fields.AmenityTypeDesc[this]; }
            set { Fields.AmenityTypeDesc[this] = value; }
        }

        [DisplayName("Condition Desc"), Column("CONDITION_DESC"), Size(4000)]
        public String ConditionDesc
        {
            get { return Fields.ConditionDesc[this]; }
            set { Fields.ConditionDesc[this] = value; }
        }

        [DisplayName("Display Order Cd"), Column("DISPLAY_ORDER_CD")]
        public Int32? DisplayOrderCd
        {
            get { return Fields.DisplayOrderCd[this]; }
            set { Fields.DisplayOrderCd[this] = value; }
        }

        [DisplayName("Comment Txt"), Column("COMMENT_TXT"), Size(4000)]
        public String CommentTxt
        {
            get { return Fields.CommentTxt[this]; }
            set { Fields.CommentTxt[this] = value; }
        }

        [DisplayName("Created Dat"), Column("CREATED_DAT"), NotNull]
        public DateTime? CreatedDat
        {
            get { return Fields.CreatedDat[this]; }
            set { Fields.CreatedDat[this] = value; }
        }

        [DisplayName("Created By Nam"), Column("CREATED_BY_NAM"), Size(100), NotNull]
        public String CreatedByNam
        {
            get { return Fields.CreatedByNam[this]; }
            set { Fields.CreatedByNam[this] = value; }
        }

        [DisplayName("Modified Dat"), Column("MODIFIED_DAT"), NotNull]
        public DateTime? ModifiedDat
        {
            get { return Fields.ModifiedDat[this]; }
            set { Fields.ModifiedDat[this] = value; }
        }

        [DisplayName("Modified By Nam"), Column("MODIFIED_BY_NAM"), Size(100), NotNull]
        public String ModifiedByNam
        {
            get { return Fields.ModifiedByNam[this]; }
            set { Fields.ModifiedByNam[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AmenityTypeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.AmenityTypeCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AmenityTypesSuppRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field AmenityTypeId;
            public StringField AmenityTypeCd;
            public StringField AmenityTypeDesc;
            public StringField ConditionDesc;
            public Int32Field DisplayOrderCd;
            public StringField CommentTxt;
            public DateTimeField CreatedDat;
            public StringField CreatedByNam;
            public DateTimeField ModifiedDat;
            public StringField ModifiedByNam;
        }
    }
}
