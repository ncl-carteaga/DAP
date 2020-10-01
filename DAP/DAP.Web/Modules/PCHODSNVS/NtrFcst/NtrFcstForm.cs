
namespace DAP.PCHODSNVS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PCHODSNVS.NtrFcst")]
    [BasedOnRow(typeof(Entities.NtrFcstRow), CheckNames = true)]
    public class NtrFcstForm
    {
        public String CompanyCd { get; set; }
        public String AccountPeriodNum { get; set; }
        public Double NtrFcst { get; set; }
        public Double PdsFcstTotal { get; set; }
        public Double ApcdFinal { get; set; }
        public Decimal NtrFinancialBudget { get; set; }
    }
}