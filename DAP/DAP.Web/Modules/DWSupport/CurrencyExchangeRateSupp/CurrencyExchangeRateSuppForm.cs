
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.CurrencyExchangeRateSupp")]
    [BasedOnRow(typeof(Entities.CurrencyExchangeRateSuppRow), CheckNames = true)]
    public class CurrencyExchangeRateSuppForm
    {
        public String CurrencyCd { get; set; }
        public DateTime SailFromDat { get; set; }
        public DateTime SailToDat { get; set; }
        public Single ExchangeRateNbr { get; set; }
        public String CommentTxt { get; set; }
        public String AuditRecordId { get; set; }
        [Visible(false)]
        public String CreatedByNam { get; set; }
        [Visible(false)]
        public DateTime CreatedTs { get; set; }
        [Visible(false)]
        public String ModifiedByNam { get; set; }
        [Visible(false)]
        public DateTime ModifiedTs { get; set; }
    }
}