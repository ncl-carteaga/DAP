
namespace DAP.PCHODSNVS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PCHODSNVS.NtrFcst")]
    [BasedOnRow(typeof(Entities.NtrFcstRow), CheckNames = true)]
    public class NtrFcstColumns
    {
        [EditLink]
        public String CompanyCd { get; set; }
        public String AccountPeriodNum { get; set; }
        public Double NtrFcst { get; set; }
        public Double PdsFcstTotal { get; set; }
        public Double ApcdFinal { get; set; }
        public Decimal NtrFinancialBudget { get; set; }
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 FcstTk { get; set; }
    }
}