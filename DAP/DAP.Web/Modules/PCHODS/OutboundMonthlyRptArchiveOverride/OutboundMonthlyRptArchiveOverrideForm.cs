
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
        [HalfWidth(UntilNext = true), LabelWidth(130, UntilNext = true)]
        public String OutboundMonth { get; set; }
        [FormCssClass("line-break-sm")]
        public String NclId { get; set; }
        
        public String OriginalUserName { get; set; }
        [HalfWidth(UntilNext = true)]
        public Decimal OciPrevMonthDomestic { get; set; }
        
        public Decimal SscPrevMonthDomestic { get; set; }
        
        public Decimal OciPrevMonthInternational { get; set; }
        
        public Decimal SscPrevMonthInternational { get; set; }
        
        public Decimal OciPrevMonthRevDomestic { get; set; }
        
        public Decimal SscPrevMonthRevDomestic { get; set; }
        
        public Decimal OciPrevMonthRevInternational { get; set; }
        
        public Decimal SscPrevMonthRevInternational { get; set; }
        
        public Decimal OciAdjustdomestic { get; set; }
        
        public Decimal SscAdjustdomestic { get; set; }
    }
}