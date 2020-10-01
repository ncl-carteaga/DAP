
namespace DAP.PCHODSNVS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PCHODSNVS.NtrBudgetByChannel")]
    [BasedOnRow(typeof(Entities.NtrBudgetByChannelRow), CheckNames = true)]
    public class NtrBudgetByChannelColumns
    {
        [EditLink]
        public String CompanyCd { get; set; }
        public Int32 AccountingYear { get; set; }
        public String ChannelSummDesc { get; set; }
        public String ChannelDesc { get; set; }
        public Decimal NtrBudget { get; set; }
        public Decimal PdsBudgetTotal { get; set; }
        public Decimal NpdBudget { get; set; }
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 BudgetbychannelTk { get; set; }
    }
}