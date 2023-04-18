
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[AIR_COSTS_ADJ_SUPP]")]
    [DisplayName("Air Cost Adjustments"), InstanceName("Air Cost Adj Supp")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]
    public sealed class AirCostAdjSuppRow : Row, IIdRow, INameRow
    {
        [DisplayName("Air Cost Adj Id"), Column("AIR_COST_ADJ_ID"), Identity, Visible(false)]
        public Int32? AirCostAdjId
        {
            get { return Fields.AirCostAdjId[this]; }
            set { Fields.AirCostAdjId[this] = value; }
        }

        [DisplayName("Voyage Cd"), Column("VOYAGE_CD"), Size(50), NotNull, QuickSearch]
        public String VoyageCd
        {
            get { return Fields.VoyageCd[this]; }
            set { Fields.VoyageCd[this] = value; }
        }

        [DisplayName("Rm Estimated Air Cost"), Column("RM_ESTIMATED_AIR_COST"), Size(18), Scale(2), NotNull]
        public Decimal? RmEstimatedAirCost
        {
            get { return Fields.RmEstimatedAirCost[this]; }
            set { Fields.RmEstimatedAirCost[this] = value; }
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

        [DisplayName("Created By Nam"), Column("CREATED_BY_NAM"), Size(50), NotNull, Updatable(false), Insertable(false)]
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
            get { return Fields.AirCostAdjId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.VoyageCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AirCostAdjSuppRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AirCostAdjId;
            public StringField VoyageCd;
            public DecimalField RmEstimatedAirCost;
            public DateTimeField EffectiveFromDt;
            public DateTimeField EffectiveToDt;
            public DateTimeField CreatedTs;
            public StringField CreatedByNam;
            public DateTimeField ModifiedTs;
            public StringField ModifiedByNam;
        }
    }
}
