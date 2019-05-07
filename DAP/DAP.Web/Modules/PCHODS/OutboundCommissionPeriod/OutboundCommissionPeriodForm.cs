
namespace DAP.PCHODS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PCHODS.OutboundCommissionPeriod")]
    [BasedOnRow(typeof(Entities.OutboundCommissionPeriodRow), CheckNames = true)]
    public class OutboundCommissionPeriodForm
    {
        public Boolean IsOpen { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public DateTime CurrentMonth { get; set; }
        public DateTime PreviousMonth { get; set; }
    }
}