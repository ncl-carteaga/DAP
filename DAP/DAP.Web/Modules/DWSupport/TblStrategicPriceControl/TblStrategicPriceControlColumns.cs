
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.TblStrategicPriceControl")]
    [BasedOnRow(typeof(Entities.TblStrategicPriceControlRow), CheckNames = true)]
    public class TblStrategicPriceControlColumns
    {
        [EditLink]
        public Int64 SailId { get; set; }
        [EditLink]
        public String CategoryCd { get; set; }
        public DateTime EffectiveFromDat { get; set; }
        public DateTime EffectiveToDat { get; set; }
        public Int32 DiscPct { get; set; }
        public DateTime CreatedDat { get; set; }
        public String CreatedByNam { get; set; }
        public DateTime ModifiedDat { get; set; }
        public String ModifiedByNam { get; set; }
    }
}