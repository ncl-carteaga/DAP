
namespace DAP.PCHODS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PCHODS.OutboundMonthlyRptArchiveOverride")]
    [BasedOnRow(typeof(Entities.OutboundMonthlyRptArchiveOverrideRow), CheckNames = true)]
    public class OutboundMonthlyRptArchiveOverrideForm
    {
        public String NclId { get; set; }
        public String OutboundMonth { get; set; }
        public String OriginalUserName { get; set; }
        [HalfWidth]
        public Decimal OciPrevMonthDomestic { get; set; }
        [HalfWidth]
        public Decimal SscPrevMonthDomestic { get; set; }
        [HalfWidth]
        public Decimal OciPrevMonthInternational { get; set; }
        [HalfWidth]
        public Decimal SscPrevMonthInternational { get; set; }
        [HalfWidth]
        public Decimal OciPrevMonthRevDomestic { get; set; }
        [HalfWidth]
        public Decimal SscPrevMonthRevDomestic { get; set; }
        [HalfWidth]
        public Decimal OciPrevMonthRevInternational { get; set; }
        [HalfWidth]
        public Decimal SscPrevMonthRevInternational { get; set; }
        [HalfWidth]
        public Decimal OciAdjustdomestic { get; set; }
        [HalfWidth]
        public Decimal SscAdjustdomestic { get; set; }
    }
}