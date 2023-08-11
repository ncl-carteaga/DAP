
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.CappingAdjustmentsSupp")]
    [BasedOnRow(typeof(Entities.CappingAdjustmentsSuppRow), CheckNames = true)]
    public class CappingAdjustmentsSuppColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String CompanyCd { get; set; }
        public String ShipCd { get; set; }
        public String CruiseCd { get; set; }
        public Int32 CappedCabinCapacity { get; set; }
        public Int32 SingleCabinCapacity { get; set; }
        public DateTime EffectiveFromDate { get; set; }
        public DateTime EffectiveToDate { get; set; }
        public DateTime ModifiedTs { get; set; }
        public String ModifiedByNam { get; set; }
    }
}