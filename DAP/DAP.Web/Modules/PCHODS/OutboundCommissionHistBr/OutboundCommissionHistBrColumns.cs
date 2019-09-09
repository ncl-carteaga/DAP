
namespace DAP.PCHODS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PCHODS.OutboundCommissionHistBr")]
    [BasedOnRow(typeof(Entities.OutboundCommissionHistBrRow), CheckNames = true)]
    public class OutboundCommissionHistBrColumns
    {
        [EditLink]
        public String CommissionId { get; set; }
        public String CompanyName { get; set; }
        public Decimal LowNumBookings { get; set; }
        public Decimal HighNumBookings { get; set; }
        public Decimal CommissionRate { get; set; }
        public DateTime ActiveDt { get; set; }
        public DateTime InactiveDt { get; set; }
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CommissionHistBrId { get; set; }
    }
}