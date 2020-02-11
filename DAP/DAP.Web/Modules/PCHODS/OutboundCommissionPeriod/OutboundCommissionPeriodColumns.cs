
namespace DAP.PCHODS.Lookups
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PCHODS.OutboundCommissionPeriod")]
    [BasedOnRow(typeof(Entities.OutboundCommissionPeriodRow), CheckNames = true)]
    public class OutboundCommissionPeriodColumns
    {
        [DisplayName("Db.Shared.RecordId"), AlignRight, Visible(false)]
        public Int32 OutboundCommissionPeriodId { get; set; }
        [Width(100), AlignCenter, HeaderCssClass("align-center"), SortOrder(0, true)]
        public Boolean IsOpen { get; set; }
        [SortOrder(1, true)]
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        [Width(100)]
        public DateTime CurrentMonth { get; set; }
        [Width(100)]
        public DateTime PreviousMonth { get; set; }

        public DateTime ClosedDate { get; set; }

        public String ClosedBy { get; set; }
    }
}