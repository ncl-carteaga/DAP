
namespace DAP.PCHDW.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PCHDW.RevenueAdhocManagement")]
    [BasedOnRow(typeof(Entities.RevenueAdhocManagementRow), CheckNames = true)]
    public class RevenueAdhocManagementColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Key { get; set; }
        [EditLink]
        public String DatabaseId { get; set; }
        public String CubeId { get; set; }
        public String MeasuregroupId { get; set; }
        public DateTime AdhocDate { get; set; }
        public Int32 AdhocDateTk { get; set; }
        public DateTime AdhocStlydate { get; set; }
        public Int32 AdhocStlydateTk { get; set; }
        public DateTime LastProcessedDateTime { get; set; }
    }
}