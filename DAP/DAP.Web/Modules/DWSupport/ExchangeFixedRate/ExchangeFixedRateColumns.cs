
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.ExchangeFixedRate")]
    [BasedOnRow(typeof(Entities.ExchangeFixedRateRow), CheckNames = true)]
    public class ExchangeFixedRateColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ExchangeFixedRateId { get; set; }
        [EditLink]
        public String CurrencyCd { get; set; }
        public Decimal ExchangeRate { get; set; }
        public DateTime EffectiveFrom { get; set; }
        public DateTime EffectiveTo { get; set; }
        public DateTime LoadDt { get; set; }
    }
}