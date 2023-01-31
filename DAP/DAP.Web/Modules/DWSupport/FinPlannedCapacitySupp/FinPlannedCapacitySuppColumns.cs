
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.FinPlannedCapacitySupp")]
    [BasedOnRow(typeof(Entities.FinPlannedCapacitySuppRow), CheckNames = true)]
    public class FinPlannedCapacitySuppColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 FinPlannedCapacitySurKey { get; set; }
        [EditLink]
        public String ShipCd { get; set; }
        public DateTime SailFromDat { get; set; }
        public DateTime SailToDat { get; set; }
        public Int32 FinancialCabinCapacityQty { get; set; }
        public Int32 FinancialGuestCapacityQty { get; set; }
        public String CapacityDesc { get; set; }
        public DateTime CreatedTs { get; set; }
        public String CreatedByNam { get; set; }
        public String ModifiedByNam { get; set; }
        public DateTime ModifiedTs { get; set; }
        public Int32 UnadjustedFinancialCabinCapacityQty { get; set; }
        public Int32 UnadjustedFinancialGuestCapacityQty { get; set; }
    }
}