
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.GtfSupp")]
    [BasedOnRow(typeof(Entities.GtfSuppRow), CheckNames = true)]
    public class GtfSuppColumns
    {   
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 GtfsuppId { get; set; }
        [EditLink]
        public String ShipCd { get; set; }
        public String CategoryCd { get; set; }
        public String EmbarkDebarkCd { get; set; }
        public Decimal Rate { get; set; }
        public DateTime EffectiveFromDt { get; set; }
        public DateTime EffectiveToDt { get; set; }
        public DateTime CreatedTs { get; set; }
        public String CreatedByNam { get; set; }
        public DateTime ModifiedTs { get; set; }
        public String ModifiedByNam { get; set; }
    }
}