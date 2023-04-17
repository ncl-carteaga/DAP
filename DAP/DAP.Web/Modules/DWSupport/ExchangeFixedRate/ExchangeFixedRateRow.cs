
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[nvs].[ExchangeFixedRate]")]
    [DisplayName("Exchange Fixed Rate"), InstanceName("Exchange Fixed Rate")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]

    public sealed class ExchangeFixedRateRow : Row, IIdRow, INameRow
    {
        [DisplayName("Exchange Fixed Rate Id"), Column("ExchangeFixedRateID"), Identity]
        public Int32? ExchangeFixedRateId
        {
            get { return Fields.ExchangeFixedRateId[this]; }
            set { Fields.ExchangeFixedRateId[this] = value; }
        }

        [DisplayName("Currency Cd"), Column("Currency_CD"), Size(3), NotNull, QuickSearch]
        public String CurrencyCd
        {
            get { return Fields.CurrencyCd[this]; }
            set { Fields.CurrencyCd[this] = value; }
        }

        [DisplayName("Exchange Rate"), Column("Exchange_rate"), Size(18), Scale(4), NotNull]
        public Decimal? ExchangeRate
        {
            get { return Fields.ExchangeRate[this]; }
            set { Fields.ExchangeRate[this] = value; }
        }

        [DisplayName("Effective From"), Column("Effective_from"), NotNull]
        public DateTime? EffectiveFrom
        {
            get { return Fields.EffectiveFrom[this]; }
            set { Fields.EffectiveFrom[this] = value; }
        }

        [DisplayName("Effective To"), Column("Effective_to"), DefaultValue("12/30/9999")]
        public DateTime? EffectiveTo
        {
            get { return Fields.EffectiveTo[this]; }
            set { Fields.EffectiveTo[this] = value; }
        }

        [DisplayName("Load Dt"), Column("Load_dt"), NotNull]
        public DateTime? LoadDt
        {
            get { return Fields.LoadDt[this]; }
            set { Fields.LoadDt[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ExchangeFixedRateId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CurrencyCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ExchangeFixedRateRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ExchangeFixedRateId;
            public StringField CurrencyCd;
            public DecimalField ExchangeRate;
            public DateTimeField EffectiveFrom;
            public DateTimeField EffectiveTo;
            public DateTimeField LoadDt;
        }
    }
}
