
namespace DAP.PCHODSNVS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PCHODSNVS.SuppKeyAcctTarget")]
    [BasedOnRow(typeof(Entities.SuppKeyAcctTargetRow), CheckNames = true)]
    public class SuppKeyAcctTargetForm
    {
        [Category("Account")]
        public Double CompanyCd { get; set; }
        public String AgencyCd { get; set; }
        public Int16 Year { get; set; }
        public String KeyAcctLink { get; set; }
        public String AccountType { get; set; }

        public DateTime LoadDt { get; set; }
        [HalfWidth(UntilNext = true)]
        [Category("Q1"), Collapsible(Collapsed = false)]
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

        [Category("Q2"), Collapsible(Collapsed = false)]
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
        [Category("Q3"), Collapsible(Collapsed = false)]
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

        [Category("Q4"), Collapsible(Collapsed = false)]
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
      
    }
}