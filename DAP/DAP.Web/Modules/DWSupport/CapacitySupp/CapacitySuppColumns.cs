﻿
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.CapacitySupp")]
    [BasedOnRow(typeof(Entities.CapacitySuppRow), CheckNames = true)]
    public class CapacitySuppColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CapacityId { get; set; }
        [EditLink]
        public String ShipCd { get; set; }
        public Int32 DoCapacity { get; set; }
        public Int32 CabinCapacity { get; set; }
        public DateTime EffectiveFromDt { get; set; }
        public DateTime EffectiveToDt { get; set; }
        public DateTime SailStartDate { get; set; }
        public DateTime SailEndDate { get; set; }
        public DateTime CreatedTs { get; set; }
        public String CreatedByNam { get; set; }
        public DateTime ModifiedTs { get; set; }
        public String ModifiedByNam { get; set; }
    }
}