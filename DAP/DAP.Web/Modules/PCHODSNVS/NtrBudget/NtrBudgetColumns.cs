
namespace DAP.PCHODSNVS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PCHODSNVS.NtrBudget")]
    [BasedOnRow(typeof(Entities.NtrBudgetRow), CheckNames = true)]
    public class NtrBudgetColumns
    {
        [EditLink]
        public String CompanyCd { get; set; }
        public String AccountPeriodNum { get; set; }
        public Double NtrBudget { get; set; }
        public Double PdsBudgetTotal { get; set; }
        public Double ApcdFinal { get; set; }
        public Decimal NtrFinancialBudget { get; set; }
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 BudgetTk { get; set; }
    }
}