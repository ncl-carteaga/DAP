
namespace DAP.PCHODS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PCHODS.OutboundCommissionHist")]
    [BasedOnRow(typeof(Entities.OutboundCommissionHistRow), CheckNames = true)]
    public class OutboundCommissionHistColumns
    {     
        public String CommissionId { get; set; }
        public String CompanyName { get; set; }
        public Decimal LowNumBookings { get; set; }
        public Decimal HighNumBookings { get; set; }
        public Decimal CommissionRate { get; set; }
        public DateTime ActiveDt { get; set; }
        public DateTime InactiveDt { get; set; }
        public Int32 CommissionHistId { get; set; }
    }
}