
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[AMENITY_DETAILS_SUPP]")]
    [DisplayName("Amenity Details"), InstanceName("Amenity Details Supp")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]
    public sealed class AmenityDetailsSuppRow : Row, IIdRow, INameRow
    {
        [DisplayName("Amenity Detail Id"), Column("AMENITY_DETAIL_ID"), Identity]
        public Int64? AmenityDetailId
        {
            get { return Fields.AmenityDetailId[this]; }
            set { Fields.AmenityDetailId[this] = value; }
        }

        [DisplayName("Amenity Detail Code"), Column("AMENITY_DETAIL_CD"), Size(60), NotNull, QuickSearch]
        public String AmenityDetailCd
        {
            get { return Fields.AmenityDetailCd[this]; }
            set { Fields.AmenityDetailCd[this] = value; }
        }

        [DisplayName("Office"), Column("OFFICE_CD"), Size(15), NotNull, LookupEditor("DWSupport.AmenityOffice")]
        public String OfficeCd
        {
            get { return Fields.OfficeCd[this]; }
            set { Fields.OfficeCd[this] = value; }
        }

        [DisplayName("Amenity"), Column("AMENITY_ID"), NotNull, ForeignKey("[dbo].[AMENITIES_SUPP]", "AMENITY_ID"), LeftJoin("jAmenity"), TextualField("AmenityAmenityCd")]
        public Int64? AmenityId
        {
            get { return Fields.AmenityId[this]; }
            set { Fields.AmenityId[this] = value; }
        }

        [DisplayName("Sail Day From Qty"), Column("SAIL_DAY_FROM_QTY")]
        public Int32? SailDayFromQty
        {
            get { return Fields.SailDayFromQty[this]; }
            set { Fields.SailDayFromQty[this] = value; }
        }

        [DisplayName("Sail Day To Qty"), Column("SAIL_DAY_TO_QTY")]
        public Int32? SailDayToQty
        {
            get { return Fields.SailDayToQty[this]; }
            set { Fields.SailDayToQty[this] = value; }
        }

        [DisplayName("Amenity Pts Qty"), Column("AMENITY_PTS_QTY"), NotNull]
        public Int32? AmenityPtsQty
        {
            get { return Fields.AmenityPtsQty[this]; }
            set { Fields.AmenityPtsQty[this] = value; }
        }

        [DisplayName("Min Cabin Qty"), Column("MIN_CABIN_QTY")]
        public Int32? MinCabinQty
        {
            get { return Fields.MinCabinQty[this]; }
            set { Fields.MinCabinQty[this] = value; }
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

        [DisplayName("Amenity Amenity Cd"), Expression("jAmenity.[AMENITY_CD]")]
        public String AmenityAmenityCd
        {
            get { return Fields.AmenityAmenityCd[this]; }
            set { Fields.AmenityAmenityCd[this] = value; }
        }

        [DisplayName("Amenity Amenity Type Id"), Expression("jAmenity.[AMENITY_TYPE_ID]")]
        public Int64? AmenityAmenityTypeId
        {
            get { return Fields.AmenityAmenityTypeId[this]; }
            set { Fields.AmenityAmenityTypeId[this] = value; }
        }

        [DisplayName("Amenity Amenity Desc"), Expression("jAmenity.[AMENITY_DESC]")]
        public String AmenityAmenityDesc
        {
            get { return Fields.AmenityAmenityDesc[this]; }
            set { Fields.AmenityAmenityDesc[this] = value; }
        }

        [DisplayName("Amenity Amenity Category Cd"), Expression("jAmenity.[AMENITY_CATEGORY_CD]")]
        public String AmenityAmenityCategoryCd
        {
            get { return Fields.AmenityAmenityCategoryCd[this]; }
            set { Fields.AmenityAmenityCategoryCd[this] = value; }
        }

        [DisplayName("Amenity Display Order Cd"), Expression("jAmenity.[DISPLAY_ORDER_CD]")]
        public Int32? AmenityDisplayOrderCd
        {
            get { return Fields.AmenityDisplayOrderCd[this]; }
            set { Fields.AmenityDisplayOrderCd[this] = value; }
        }

        [DisplayName("Amenity Condition Desc"), Expression("jAmenity.[CONDITION_DESC]")]
        public String AmenityConditionDesc
        {
            get { return Fields.AmenityConditionDesc[this]; }
            set { Fields.AmenityConditionDesc[this] = value; }
        }

        [DisplayName("Amenity Comment Txt"), Expression("jAmenity.[COMMENT_TXT]")]
        public String AmenityCommentTxt
        {
            get { return Fields.AmenityCommentTxt[this]; }
            set { Fields.AmenityCommentTxt[this] = value; }
        }

        [DisplayName("Amenity Amenity Cost Amt"), Expression("jAmenity.[AMENITY_COST_AMT]")]
        public Decimal? AmenityAmenityCostAmt
        {
            get { return Fields.AmenityAmenityCostAmt[this]; }
            set { Fields.AmenityAmenityCostAmt[this] = value; }
        }

        [DisplayName("Amenity Amenity Addon Amt"), Expression("jAmenity.[AMENITY_ADDON_AMT]")]
        public Decimal? AmenityAmenityAddonAmt
        {
            get { return Fields.AmenityAmenityAddonAmt[this]; }
            set { Fields.AmenityAmenityAddonAmt[this] = value; }
        }

        [DisplayName("Amenity Is Per Diem Cd"), Expression("jAmenity.[IS_PER_DIEM_CD]")]
        public String AmenityIsPerDiemCd
        {
            get { return Fields.AmenityIsPerDiemCd[this]; }
            set { Fields.AmenityIsPerDiemCd[this] = value; }
        }

        [DisplayName("Amenity Currency Cd"), Expression("jAmenity.[CURRENCY_CD]")]
        public String AmenityCurrencyCd
        {
            get { return Fields.AmenityCurrencyCd[this]; }
            set { Fields.AmenityCurrencyCd[this] = value; }
        }

        [DisplayName("Amenity Created Dat"), Expression("jAmenity.[CREATED_DAT]")]
        public DateTime? AmenityCreatedDat
        {
            get { return Fields.AmenityCreatedDat[this]; }
            set { Fields.AmenityCreatedDat[this] = value; }
        }

        [DisplayName("Amenity Created By Nam"), Expression("jAmenity.[CREATED_BY_NAM]")]
        public String AmenityCreatedByNam
        {
            get { return Fields.AmenityCreatedByNam[this]; }
            set { Fields.AmenityCreatedByNam[this] = value; }
        }

        [DisplayName("Amenity Modified Dat"), Expression("jAmenity.[MODIFIED_DAT]")]
        public DateTime? AmenityModifiedDat
        {
            get { return Fields.AmenityModifiedDat[this]; }
            set { Fields.AmenityModifiedDat[this] = value; }
        }

        [DisplayName("Amenity Modified By Nam"), Expression("jAmenity.[MODIFIED_BY_NAM]")]
        public String AmenityModifiedByNam
        {
            get { return Fields.AmenityModifiedByNam[this]; }
            set { Fields.AmenityModifiedByNam[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AmenityDetailId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.AmenityDetailCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AmenityDetailsSuppRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field AmenityDetailId;
            public StringField AmenityDetailCd;
            public StringField OfficeCd;
            public Int64Field AmenityId;
            public Int32Field SailDayFromQty;
            public Int32Field SailDayToQty;
            public Int32Field AmenityPtsQty;
            public Int32Field MinCabinQty;
            public StringField ConditionDesc;
            public StringField CommentTxt;
            public DateTimeField CreatedDat;
            public StringField CreatedByNam;
            public DateTimeField ModifiedDat;
            public StringField ModifiedByNam;

            public StringField AmenityAmenityCd;
            public Int64Field AmenityAmenityTypeId;
            public StringField AmenityAmenityDesc;
            public StringField AmenityAmenityCategoryCd;
            public Int32Field AmenityDisplayOrderCd;
            public StringField AmenityConditionDesc;
            public StringField AmenityCommentTxt;
            public DecimalField AmenityAmenityCostAmt;
            public DecimalField AmenityAmenityAddonAmt;
            public StringField AmenityIsPerDiemCd;
            public StringField AmenityCurrencyCd;
            public DateTimeField AmenityCreatedDat;
            public StringField AmenityCreatedByNam;
            public DateTimeField AmenityModifiedDat;
            public StringField AmenityModifiedByNam;
        }
    }
}
