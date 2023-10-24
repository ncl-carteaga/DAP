
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[AMENITIES_SUPP]")]
    [DisplayName("Amenity"), InstanceName("Amenities Supp")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]
    public sealed class AmenitiesSuppRow : Row, IIdRow, INameRow
    {
        [DisplayName("Amenity Id"), Column("AMENITY_ID"), Identity]
        public Int64? AmenityId
        {
            get { return Fields.AmenityId[this]; }
            set { Fields.AmenityId[this] = value; }
        }

        [DisplayName("Amenity Code"), Column("AMENITY_CD"), Size(60), NotNull, QuickSearch]
        public String AmenityCd
        {
            get { return Fields.AmenityCd[this]; }
            set { Fields.AmenityCd[this] = value; }
        }

        [DisplayName("Amenity Type ID"), Column("AMENITY_TYPE_ID"), NotNull, ForeignKey("[dbo].[AMENITY_TYPES_SUPP]", "AMENITY_TYPE_ID"), LeftJoin("jAmenityType"), TextualField("AmenityType"), LookupEditor("DWSupport.AmenityType"), QuickFilter, DefaultValue(4)]
        public Int64? AmenityTypeId
        {
            get { return Fields.AmenityTypeId[this]; }
            set { Fields.AmenityTypeId[this] = value; }
        }

        [DisplayName("Amenity Desc"), Column("AMENITY_DESC"), Size(4000)]
        public String AmenityDesc
        {
            get { return Fields.AmenityDesc[this]; }
            set { Fields.AmenityDesc[this] = value; }
        }

        [DisplayName("Amenity Category"), Column("AMENITY_CATEGORY_CD"), Size(15), NotNull, LookupEditor("DWSupport.AmenityCategory"), QuickFilter, DefaultValue("ADD-ON")]
        public String AmenityCategoryCd
        {
            get { return Fields.AmenityCategoryCd[this]; }
            set { Fields.AmenityCategoryCd[this] = value; }
        }

        [DisplayName("Display Order"), Column("DISPLAY_ORDER_CD")]
        public Int32? DisplayOrderCd
        {
            get { return Fields.DisplayOrderCd[this]; }
            set { Fields.DisplayOrderCd[this] = value; }
        }

        [DisplayName("Condition Description"), Column("CONDITION_DESC"), Size(4000)]
        public String ConditionDesc
        {
            get { return Fields.ConditionDesc[this]; }
            set { Fields.ConditionDesc[this] = value; }
        }

        [DisplayName("Comment Text"), Column("COMMENT_TXT"), Size(4000)]
        public String CommentTxt
        {
            get { return Fields.CommentTxt[this]; }
            set { Fields.CommentTxt[this] = value; }
        }

        [DisplayName("Amenity Cost Amount"), Column("AMENITY_COST_AMT"), Size(13), Scale(2), NotNull]
        public Decimal? AmenityCostAmt
        {
            get { return Fields.AmenityCostAmt[this]; }
            set { Fields.AmenityCostAmt[this] = value; }
        }

        [DisplayName("Amenity Addon Amount"), Column("AMENITY_ADDON_AMT"), Size(13), Scale(2)]
        public Decimal? AmenityAddonAmt
        {
            get { return Fields.AmenityAddonAmt[this]; }
            set { Fields.AmenityAddonAmt[this] = value; }
        }

        [DisplayName("Is Per Diem"), Column("IS_PER_DIEM_CD"), Size(1), SelectYNEditor, Required]
        public String IsPerDiemCd
        {
            get { return Fields.IsPerDiemCd[this]; }
            set { Fields.IsPerDiemCd[this] = value; }
        }

        [DisplayName("Currency"), Column("CURRENCY_CD"), Size(5), NotNull, LookupEditor("PCHDW.Currency"), DefaultValue("USD")]
        public String CurrencyCd
        {
            get { return Fields.CurrencyCd[this]; }
            set { Fields.CurrencyCd[this] = value; }
        }

        [DisplayName("Created Date"), Column("CREATED_DAT"), NotNull, Updatable(false), Insertable(false)]
        public DateTime? CreatedDat
        {
            get { return Fields.CreatedDat[this]; }
            set { Fields.CreatedDat[this] = value; }
        }

        [DisplayName("Created By"), Column("CREATED_BY_NAM"), Size(100), NotNull, Updatable(false), Insertable(false)]
        public String CreatedByNam
        {
            get { return Fields.CreatedByNam[this]; }
            set { Fields.CreatedByNam[this] = value; }
        }

        [DisplayName("Modified Date"), Column("MODIFIED_DAT"), NotNull, Updatable(false), Insertable(false)]
        public DateTime? ModifiedDat
        {
            get { return Fields.ModifiedDat[this]; }
            set { Fields.ModifiedDat[this] = value; }
        }

        [DisplayName("Modified By"), Column("MODIFIED_BY_NAM"), Size(100), NotNull, Updatable(false), Insertable(false)]
        public String ModifiedByNam
        {
            get { return Fields.ModifiedByNam[this]; }
            set { Fields.ModifiedByNam[this] = value; }
        }

        [DisplayName("Amenity Type"), Expression("jAmenityType.[AMENITY_TYPE_CD]")]
        public String AmenityTypeAmenityTypeCd
        {
            get { return Fields.AmenityTypeAmenityTypeCd[this]; }
            set { Fields.AmenityTypeAmenityTypeCd[this] = value; }
        }

        [DisplayName("Amenity Type Amenity Type Desc"), Expression("jAmenityType.[AMENITY_TYPE_DESC]")]
        public String AmenityTypeAmenityTypeDesc
        {
            get { return Fields.AmenityTypeAmenityTypeDesc[this]; }
            set { Fields.AmenityTypeAmenityTypeDesc[this] = value; }
        }

        [DisplayName("Amenity Type Condition Desc"), Expression("jAmenityType.[CONDITION_DESC]")]
        public String AmenityTypeConditionDesc
        {
            get { return Fields.AmenityTypeConditionDesc[this]; }
            set { Fields.AmenityTypeConditionDesc[this] = value; }
        }

        [DisplayName("Amenity Type Display Order Cd"), Expression("jAmenityType.[DISPLAY_ORDER_CD]")]
        public Int32? AmenityTypeDisplayOrderCd
        {
            get { return Fields.AmenityTypeDisplayOrderCd[this]; }
            set { Fields.AmenityTypeDisplayOrderCd[this] = value; }
        }

        [DisplayName("Amenity Type Comment Txt"), Expression("jAmenityType.[COMMENT_TXT]")]
        public String AmenityTypeCommentTxt
        {
            get { return Fields.AmenityTypeCommentTxt[this]; }
            set { Fields.AmenityTypeCommentTxt[this] = value; }
        }

        [DisplayName("Amenity Type Created Dat"), Expression("jAmenityType.[CREATED_DAT]")]
        public DateTime? AmenityTypeCreatedDat
        {
            get { return Fields.AmenityTypeCreatedDat[this]; }
            set { Fields.AmenityTypeCreatedDat[this] = value; }
        }

        [DisplayName("Amenity Type Created By Nam"), Expression("jAmenityType.[CREATED_BY_NAM]")]
        public String AmenityTypeCreatedByNam
        {
            get { return Fields.AmenityTypeCreatedByNam[this]; }
            set { Fields.AmenityTypeCreatedByNam[this] = value; }
        }

        [DisplayName("Amenity Type Modified Dat"), Expression("jAmenityType.[MODIFIED_DAT]")]
        public DateTime? AmenityTypeModifiedDat
        {
            get { return Fields.AmenityTypeModifiedDat[this]; }
            set { Fields.AmenityTypeModifiedDat[this] = value; }
        }

        [DisplayName("Amenity Type Modified By Nam"), Expression("jAmenityType.[MODIFIED_BY_NAM]")]
        public String AmenityTypeModifiedByNam
        {
            get { return Fields.AmenityTypeModifiedByNam[this]; }
            set { Fields.AmenityTypeModifiedByNam[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AmenityId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.AmenityCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AmenitiesSuppRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field AmenityId;
            public StringField AmenityCd;
            public Int64Field AmenityTypeId;
            public StringField AmenityDesc;
            public StringField AmenityCategoryCd;
            public Int32Field DisplayOrderCd;
            public StringField ConditionDesc;
            public StringField CommentTxt;
            public DecimalField AmenityCostAmt;
            public DecimalField AmenityAddonAmt;
            public StringField IsPerDiemCd;
            public StringField CurrencyCd;
            public DateTimeField CreatedDat;
            public StringField CreatedByNam;
            public DateTimeField ModifiedDat;
            public StringField ModifiedByNam;

            public StringField AmenityTypeAmenityTypeCd;
            public StringField AmenityTypeAmenityTypeDesc;
            public StringField AmenityTypeConditionDesc;
            public Int32Field AmenityTypeDisplayOrderCd;
            public StringField AmenityTypeCommentTxt;
            public DateTimeField AmenityTypeCreatedDat;
            public StringField AmenityTypeCreatedByNam;
            public DateTimeField AmenityTypeModifiedDat;
            public StringField AmenityTypeModifiedByNam;
        }
    }
}
