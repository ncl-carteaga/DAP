
namespace DAP.PCHODS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PCHODS.OutboundMonthlyRptArchiveOverride")]
    [BasedOnRow(typeof(Entities.OutboundMonthlyRptArchiveOverrideRow), CheckNames = true)]
    public class OutboundMonthlyRptArchiveOverrideColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, Visible(false)]
        public Int32 OutboundMonthlyRptArchiveId { get; set; }
        [EditLink]
        public String OutboundMonth { get; set; }
        [EditLink]
        public String NclId { get; set; }
        [EditLink]
        public String OriginalUserName { get; set; }
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