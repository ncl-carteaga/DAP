
namespace DAP.DWSupport.Entities
{
    using DAP.PCHDW.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[CREDIT_CARD_ADJ_SUPP]")]
    [DisplayName("Credit Card Adj Supp"), InstanceName("Credit Card Adj Supp")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]

    public sealed class CreditCardAdjSuppRow : Row, IIdRow, INameRow
    {
        [DisplayName("Creditcard Adj Id"), Column("CREDITCARD_ADJ_ID"), Identity, Visible(false)]
        public Int32? CreditcardAdjId
        {
            get { return Fields.CreditcardAdjId[this]; }
            set { Fields.CreditcardAdjId[this] = value; }
        }

        [DisplayName("Office"), Column("OFFICE"), NotNull, QuickSearch, LookupEditor("DWSupport.CCOffice")]
        public String Office
        {
            get { return Fields.Office[this]; }
            set { Fields.Office[this] = value; }
        }

        [DisplayName("Blended Rate"), Column("BLENDED_RATE"), Size(18), Scale(2), NotNull]
        public Decimal? BlendedRate
        {
            get { return Fields.BlendedRate[this]; }
            set { Fields.BlendedRate[this] = value; }
        }

        [DisplayName("Proposed Rate"), Column("PROPOSED_RATE"), Size(18), Scale(2), ReadOnly(true)]
        public Decimal? ProposedRate
        {
            get { return Fields.ProposedRate[this]; }
            set { Fields.ProposedRate[this] = value; }
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

        [DisplayName("Created Ts"), Column("CREATED_TS")]
        public DateTime? CreatedTs
        {
            get { return Fields.CreatedTs[this]; }
            set { Fields.CreatedTs[this] = value; }
        }

        [DisplayName("Created By Name"), Column("CREATED_BY_NAME"), Size(50)]
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

        [DisplayName("Modified By Nam"), Column("MODIFIED_BY_NAM"), Size(50)]
        public String ModifiedByNam
        {
            get { return Fields.ModifiedByNam[this]; }
            set { Fields.ModifiedByNam[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CreditcardAdjId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Office; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CreditCardAdjSuppRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CreditcardAdjId;
            public StringField Office;
            public DecimalField BlendedRate;
            public DecimalField ProposedRate;
            public DateTimeField EffectiveFromDt;
            public DateTimeField EffectiveToDt;
            public DateTimeField CreatedTs;
            public StringField CreatedByName;
            public DateTimeField ModifiedTs;
            public StringField ModifiedByNam;
        }
    }
}
