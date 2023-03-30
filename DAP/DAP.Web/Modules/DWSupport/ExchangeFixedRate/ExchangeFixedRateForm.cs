
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.ExchangeFixedRate")]
    [BasedOnRow(typeof(Entities.ExchangeFixedRateRow), CheckNames = true)]
    public class ExchangeFixedRateForm
    {
        public String CurrencyCd { get; set; }
        public Decimal ExchangeRate { get; set; }
        public DateTime EffectiveFrom { get; set; }
        public DateTime EffectiveTo { get; set; }
        public DateTime LoadDt { get; set; }
    }
}