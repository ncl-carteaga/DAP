
namespace DAP.DWSupport.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DW_Support"), Module("DWSupport"), TableName("[dbo].[CURRENCY_EXCHANGE_RATE_SUPP]")]
    [DisplayName("Currency Exchange Rate Supp"), InstanceName("Currency Exchange Rate Supp")]
    [ReadPermission(PermissionKeys.DWSupport.View)]
    [ModifyPermission(PermissionKeys.DWSupport.Modify)]
    [DeletePermission(PermissionKeys.DWSupport.Delete)]
    [DataAuditLog]
    public sealed class CurrencyExchangeRateSuppRow : Row, IIdRow, INameRow
    {
        [DisplayName("Currency Sur Key"), Column("CURRENCY_SUR_KEY"), Size(50), PrimaryKey, QuickSearch]
        public Int32? CurrencySurKey
        {
            get { return Fields.CurrencySurKey[this]; }
            set { Fields.CurrencySurKey[this] = value; }
        }

        [DisplayName("Currency Cd"), Column("CURRENCY_CD"), Size(3)]
        public String CurrencyCd
        {
            get { return Fields.CurrencyCd[this]; }
            set { Fields.CurrencyCd[this] = value; }
        }

        [DisplayName("Sail From Dat"), Column("SAIL_FROM_DAT")]
        public DateTime? SailFromDat
        {
            get { return Fields.SailFromDat[this]; }
            set { Fields.SailFromDat[this] = value; }
        }

        [DisplayName("Sail To Dat"), Column("SAIL_TO_DAT")]
        public DateTime? SailToDat
        {
            get { return Fields.SailToDat[this]; }
            set { Fields.SailToDat[this] = value; }
        }

        [DisplayName("Exchange Rate Nbr"), Column("EXCHANGE_RATE_NBR")]
        public Single? ExchangeRateNbr
        {
            get { return Fields.ExchangeRateNbr[this]; }
            set { Fields.ExchangeRateNbr[this] = value; }
        }

        [DisplayName("Comment Txt"), Column("COMMENT_TXT"), Size(2000)]
        public String CommentTxt
        {
            get { return Fields.CommentTxt[this]; }
            set { Fields.CommentTxt[this] = value; }
        }

        [DisplayName("Audit Record Id"), Column("AUDIT_RECORD_ID"), Size(100)]
        public String AuditRecordId
        {
            get { return Fields.AuditRecordId[this]; }
            set { Fields.AuditRecordId[this] = value; }
        }

        [Visible(false)]
        [DisplayName("Created By Nam"), Column("CREATED_BY_NAM"), Size(50), NotNull]
        public String CreatedByNam
        {
            get { return Fields.CreatedByNam[this]; }
            set { Fields.CreatedByNam[this] = value; }
        }

        [Visible(false)]
        [DisplayName("Created Ts"), Column("CREATED_TS"), NotNull]
        public DateTime? CreatedTs
        {
            get { return Fields.CreatedTs[this]; }
            set { Fields.CreatedTs[this] = value; }
        }

        [Visible(false)]
        [DisplayName("Modified By Nam"), Column("MODIFIED_BY_NAM"), Size(50)]
        public String ModifiedByNam
        {
            get { return Fields.ModifiedByNam[this]; }
            set { Fields.ModifiedByNam[this] = value; }
        }

        [Visible(false)]
        [DisplayName("Modified Ts"), Column("MODIFIED_TS"), NotNull]
        public DateTime? ModifiedTs
        {
            get { return Fields.ModifiedTs[this]; }
            set { Fields.ModifiedTs[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CurrencySurKey; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CurrencyCd; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CurrencyExchangeRateSuppRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CurrencySurKey;
            public StringField CurrencyCd;
            public DateTimeField SailFromDat;
            public DateTimeField SailToDat;
            public SingleField ExchangeRateNbr;
            public StringField CommentTxt;
            public StringField AuditRecordId;
            public StringField CreatedByNam;
            public DateTimeField CreatedTs;
            public StringField ModifiedByNam;
            public DateTimeField ModifiedTs;
        }
    }
}
