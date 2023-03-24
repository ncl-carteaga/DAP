
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[UPGRADE_ADV_ADJ_SUPP]")]
    [DisplayName("Upgrade Adv Adj Supp"), InstanceName("Upgrade Adv Adj Supp")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]

    public sealed class UpgradeAdvAdjSuppRow : Row, IIdRow, INameRow
    {
        [DisplayName("Upgrade Adv Adj Id"), Column("UPGRADE_ADV_ADJ_ID"), NotNull, Visible(false)]
        public Int32? UpgradeAdvAdjId
        {
            get { return Fields.UpgradeAdvAdjId[this]; }
            set { Fields.UpgradeAdvAdjId[this] = value; }
        }

        [DisplayName("Upgrade Amount Min"), Column("UPGRADE_AMOUNT_MIN"), Size(18), Scale(2), NotNull]
        public Decimal? UpgradeAmountMin
        {
            get { return Fields.UpgradeAmountMin[this]; }
            set { Fields.UpgradeAmountMin[this] = value; }
        }

        [DisplayName("Upgrade Amount Max"), Column("UPGRADE_AMOUNT_MAX"), Size(18), Scale(2), NotNull]
        public Decimal? UpgradeAmountMax
        {
            get { return Fields.UpgradeAmountMax[this]; }
            set { Fields.UpgradeAmountMax[this] = value; }
        }

        [DisplayName("Commission Percent"), Column("COMMISSION_PERCENT"), Size(18), Scale(2), NotNull]
        public Decimal? CommissionPercent
        {
            get { return Fields.CommissionPercent[this]; }
            set { Fields.CommissionPercent[this] = value; }
        }

        [DisplayName("Effective From Dt"), Column("EFFECTIVE_FROM_DT"), NotNull]
        public DateTime? EffectiveFromDt
        {
            get { return Fields.EffectiveFromDt[this]; }
            set { Fields.EffectiveFromDt[this] = value; }
        }

        [DisplayName("Effective To Dt"), Column("EFFECTIVE_TO_DT")]
        public DateTime? EffectiveToDt
        {
            get { return Fields.EffectiveToDt[this]; }
            set { Fields.EffectiveToDt[this] = value; }
        }

        [DisplayName("Created Ts"), Column("CREATED_TS")]
        public DateTime? CreatedTs
        {
            get { return Fields.CreatedTs[this]; }
            set { Fields.CreatedTs[this] = value; }
        }

        [DisplayName("Created By Name"), Column("CREATED_BY_NAME"), Size(50), QuickSearch]
        public String CreatedByName
        {
            get { return Fields.CreatedByName[this]; }
            set { Fields.CreatedByName[this] = value; }
        }

        [DisplayName("Modified Ts"), Column("MODIFIED_TS")]
        public DateTime? ModifiedTs
        {
            get { return Fields.ModifiedTs[this]; }
            set { Fields.ModifiedTs[this] = value; }
        }

        [DisplayName("Modified By Nam"), Column("MODIFIED_BY_NAME"), Size(50)]
        public String ModifiedByName
        {
            get { return Fields.ModifiedByName[this]; }
            set { Fields.ModifiedByName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.UpgradeAdvAdjId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CreatedByName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UpgradeAdvAdjSuppRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field UpgradeAdvAdjId;
            public DecimalField UpgradeAmountMin;
            public DecimalField UpgradeAmountMax;
            public DecimalField CommissionPercent;
            public DateTimeField EffectiveFromDt;
            public DateTimeField EffectiveToDt;
            public DateTimeField CreatedTs;
            public StringField CreatedByName;
            public DateTimeField ModifiedTs;
            public StringField ModifiedByName;
        }
    }
}
