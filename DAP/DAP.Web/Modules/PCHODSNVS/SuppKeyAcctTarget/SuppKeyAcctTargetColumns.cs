
namespace DAP.PCHODSNVS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PCHODSNVS.SuppKeyAcctTarget")]
    [BasedOnRow(typeof(Entities.SuppKeyAcctTargetRow), CheckNames = true)]
    public class SuppKeyAcctTargetColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 KeyAcctTk { get; set; }
        [EditLink]
        public Double CompanyCd { get; set; }
        [EditLink]
        public String AgencyCd { get; set; }
        [EditLink]
        public Int16 Year { get; set; }
        [EditLink]
        public String KeyAcctLink { get; set; }
        public String AccountType { get; set; }
        public Decimal CcfTargetQ1 { get; set; }
        public Decimal PrctTargetQ1 { get; set; }
        public Decimal CcfTargetQ12 { get; set; }
        public Decimal PrctTargetQ12 { get; set; }
        public Decimal CcfTargetQ13 { get; set; }
        public Decimal PrctTargetQ13 { get; set; }
        public Decimal CcfTargetQ14 { get; set; }
        public Decimal PrctTargetQ14 { get; set; }
        public Decimal CcfTargetQ15 { get; set; }
        public Decimal PrctTargetQ15 { get; set; }

        public Decimal CcfTargetQ2 { get; set; }
        public Decimal PrctTargetQ2 { get; set; }
        public Decimal CcfTargetQ22 { get; set; }

        public Decimal PrctTargetQ22 { get; set; }
        public Decimal CcfTargetQ23 { get; set; }
        public Decimal PrctTargetQ23 { get; set; }
        public Decimal CcfTargetQ24 { get; set; }
        public Decimal PrctTargetQ24 { get; set; }
        public Decimal CcfTargetQ25 { get; set; }
        public Decimal PrctTargetQ25 { get; set; }
        public Decimal CcfTargetQ3 { get; set; }
        public Decimal PrctTargetQ3 { get; set; }
        public Decimal CcfTargetQ32 { get; set; }
        public Decimal PrctTargetQ32 { get; set; }
        public Decimal CcfTargetQ33 { get; set; }
        public Decimal PrctTargetQ33 { get; set; }
        public Decimal CcfTargetQ34 { get; set; }
        public Decimal PrctTargetQ34 { get; set; }
        public Decimal CcfTargetQ35 { get; set; }
        public Decimal PrctTargetQ35 { get; set; }

        public Decimal CcfTargetQ4 { get; set; }
        public Decimal PrctTargetQ4 { get; set; }
        public Decimal CcfTargetQ42 { get; set; }
        public Decimal PrctTargetQ42 { get; set; }
        public Decimal CcfTargetQ43 { get; set; }
        public Decimal PrctTargetQ43 { get; set; }
        public Decimal CcfTargetQ44 { get; set; }
        public Decimal PrctTargetQ44 { get; set; }
        public Decimal CcfTargetQ45 { get; set; }
        public Decimal PrctTargetQ45 { get; set; }
        public Decimal FyCcfTargetFy1 { get; set; }
        public Decimal FyCcfTargetFy2 { get; set; }
        public Decimal FyCcfTargetFy3 { get; set; }
        public Decimal FyCcfTargetFy4 { get; set; }
        public Decimal FyCcfTargetFy5 { get; set; }
        public DateTime LoadDt { get; set; }
    }
}