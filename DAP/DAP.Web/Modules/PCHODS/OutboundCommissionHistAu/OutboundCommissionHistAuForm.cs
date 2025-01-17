﻿
namespace DAP.PCHODS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PCHODS.OutboundCommissionHistAu")]
    [BasedOnRow(typeof(Entities.OutboundCommissionHistAuRow), CheckNames = true)]
    public class OutboundCommissionHistAuForm
    {
        public String CommissionId { get; set; }
        public String CompanyCd { get; set; }
        public Decimal LowNumBookings { get; set; }
        public Decimal HighNumBookings { get; set; }
        public Decimal CommissionRate { get; set; }
        public DateTime ActiveDt { get; set; }
        public DateTime InactiveDt { get; set; }
    }
}