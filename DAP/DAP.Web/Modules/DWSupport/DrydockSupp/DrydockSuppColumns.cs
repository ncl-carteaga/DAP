
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.DrydockSupp")]
    [BasedOnRow(typeof(Entities.DrydockSuppRow), CheckNames = true)]
    public class DrydockSuppColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 DrydockId { get; set; }
        [EditLink]
        public String ShipCd { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public Int32 NumberOfDays { get; set; }
        public DateTime EffectiveFromDt { get; set; }
        public DateTime EffectiveToDt { get; set; }
        public Int32 SailYear { get; set; }
        public String Status { get; set; }
        public DateTime CreatedTs { get; set; }
        public String CreatedByNam { get; set; }
        public DateTime ModifiedTs { get; set; }
        public String ModifiedByNam { get; set; }
    }
}