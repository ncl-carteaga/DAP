
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.CurrencyExchangeRateSupp")]
    [BasedOnRow(typeof(Entities.CurrencyExchangeRateSuppRow), CheckNames = true)]
    public class CurrencyExchangeRateSuppColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CurrencySurKey { get; set; }
        public String CurrencyCd { get; set; }
        public DateTime SailFromDat { get; set; }
        public DateTime SailToDat { get; set; }
        public Single ExchangeRateNbr { get; set; }
        public String CommentTxt { get; set; }
        public String AuditRecordId { get; set; }
        public String CreatedByNam { get; set; }
        public DateTime CreatedTs { get; set; }
        public String ModifiedByNam { get; set; }
        public DateTime ModifiedTs { get; set; }
    }
}