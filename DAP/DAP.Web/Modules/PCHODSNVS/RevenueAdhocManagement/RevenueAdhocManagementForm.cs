
namespace DAP.PCHODSNVS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PCHODSNVS.RevenueAdhocManagement")]
    [BasedOnRow(typeof(Entities.RevenueAdhocManagementRow), CheckNames = true)]
    public class RevenueAdhocManagementForm
    {
        public String DatabaseId { get; set; }
        public String CubeId { get; set; }
        public DateTime AdhocDate { get; set; }
        public Int32 AdhocDateTk { get; set; }
        public String SqlJobName { get; set; }
        public DateTime LastProcessedDateTime { get; set; }
    }
}