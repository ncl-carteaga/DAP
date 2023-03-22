
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[GTF_SUPP]")]
    [DisplayName("GTF Seattle & Panama"), InstanceName("GTF Supp")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]
    public sealed class GtfSuppRow : Row, IIdRow, INameRow
    {
        [DisplayName("Gtfsupp Id"), Column("GTFSUPP_ID"), Identity, Visible(false)]
        public Int32? GtfsuppId
        {
            get { return Fields.GtfsuppId[this]; }
            set { Fields.GtfsuppId[this] = value; }
        }

        [DisplayName("Ship Cd"), Column("SHIP_CD"), Size(3), NotNull, QuickSearch, LookupEditor(typeof(Lookups.ShipCDLookupEditor))]
        public String ShipCd
        {
            get { return Fields.ShipCd[this]; }
            set { Fields.ShipCd[this] = value; }
        }

        [DisplayName("Category Cd"), Column("CATEGORY_CD"), Size(50), NotNull, GTFCategoryEditor]
        public String CategoryCd
        {
            get { return Fields.CategoryCd[this]; }
            set { Fields.CategoryCd[this] = value; }
        }

        [DisplayName("Embark Debark Cd"), Column("EMBARK_DEBARK_CD"), Size(3), NotNull, LookupEditor(typeof(Lookups.GTFPortLookupEditor))]
        public String EmbarkDebarkCd
        {
            get { return Fields.EmbarkDebarkCd[this]; }
            set { Fields.EmbarkDebarkCd[this] = value; }
        }

        [DisplayName("Rate"), Column("RATE"), Size(18), Scale(2), NotNull]
        public Decimal? Rate
        {
            get { return Fields.Rate[this]; }
            set { Fields.Rate[this] = value; }
        }

        [DisplayName("Effective From Dt"), Column("EFFECTIVE_FROM_DT"), NotNull]
        public DateTime? EffectiveFromDt
        {
            get { return Fields.EffectiveFromDt[this]; }
            set { Fields.EffectiveFromDt[this] = value; }
        }

        [DisplayName("Effective To Dt"), Column("EFFECTIVE_TO_DT"), DefaultValue("9999-12-30")]
        public DateTime? EffectiveToDt
        {
            get { return Fields.EffectiveToDt[this]; }
            set { Fields.EffectiveToDt[this] = value; }
        }

        [DisplayName("Created Ts"), Column("CREATED_TS"), NotNull, Updatable(false), Insertable(false)]
        public DateTime? CreatedTs
        {
            get { return Fields.CreatedTs[this]; }
            set { Fields.CreatedTs[this] = value; }
        }

        [DisplayName("Created By Name"), Column("CREATED_BY_NAM"), Size(50), NotNull, Updatable(false), Insertable(false)]
        public String CreatedByNam
        {
            get { return Fields.CreatedByNam[this]; }
            set { Fields.CreatedByNam[this] = value; }
        }

        [DisplayName("Modified Ts"), Column("MODIFIED_TS"), NotNull, Updatable(false), Insertable(false)]
        public DateTime? ModifiedTs
        {
            get { return Fields.ModifiedTs[this]; }
            set { Fields.ModifiedTs[this] = value; }
        }

        [DisplayName("Modified By Nam"), Column("MODIFIED_BY_NAM"), Size(50), NotNull, Updatable(false), Insertable(false)]
        public String ModifiedByNam
        {
            get { return Fields.ModifiedByNam[this]; }
            set { Fields.ModifiedByNam[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.GtfsuppId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ShipCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public GtfSuppRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field GtfsuppId;
            public StringField ShipCd;
            public StringField CategoryCd;
            public StringField EmbarkDebarkCd;
            public DecimalField Rate;
            public DateTimeField EffectiveFromDt;
            public DateTimeField EffectiveToDt;
            public DateTimeField CreatedTs;
            public StringField CreatedByNam;
            public DateTimeField ModifiedTs;
            public StringField ModifiedByNam;
        }
    }
}
