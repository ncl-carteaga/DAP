
namespace DAP.PCHODSNVS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PCHODSNVS.NtrBudgetByChannel")]
    [BasedOnRow(typeof(Entities.NtrBudgetByChannelRow), CheckNames = true)]
    public class NtrBudgetByChannelForm
    {
        public String CompanyCd { get; set; }
        [DisplayFormat("Accounting Year (YYYY)")]
        public Int32 AccountingYear { get; set; }
        public String ChannelSummDesc { get; set; }
        public String ChannelDesc { get; set; }
        public Decimal NtrBudget { get; set; }
        public Decimal PdsBudgetTotal { get; set; }
        public Decimal NpdBudget { get; set; }
    }
}