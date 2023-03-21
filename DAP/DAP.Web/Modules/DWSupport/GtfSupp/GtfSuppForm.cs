
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.GtfSupp")]
    [BasedOnRow(typeof(Entities.GtfSuppRow), CheckNames = true)]
    public class GtfSuppForm
    {
        public String ShipCd { get; set; }
        public String CategoryCd { get; set; }
        public String EmbarkDebarkCd { get; set; }
        public Decimal Rate { get; set; }
        public DateTime EffectiveFromDt { get; set; }
        public DateTime EffectiveToDt { get; set; }
        [Visible(false)]
        public DateTime CreatedTs { get; set; }
        [Visible(false)]
        public String CreatedByNam { get; set; }
        [Visible(false)]
        public DateTime ModifiedTs { get; set; }
        [Visible(false)]
        public String ModifiedByNam { get; set; }
    }
}