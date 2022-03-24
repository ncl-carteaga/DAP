
namespace DAP.PCHODSNVS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PCHODSNVS.NtrBudget")]
    [BasedOnRow(typeof(Entities.NtrBudgetRow), CheckNames = true)]
    public class NtrBudgetForm
    {
        public String CompanyCd { get; set; }
        [DisplayFormat("Account Period (YYYYMM)")]
        public String AccountPeriodNum { get; set; }
        public Double NtrBudget { get; set; }
        public Double PdsBudgetTotal { get; set; }
        public Double ApcdFinal { get; set; }
        public Decimal NtrFinancialBudget { get; set; }
    }
}