
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.Region")]
    [BasedOnRow(typeof(Entities.RegionRow), CheckNames = true)]
    public class RegionForm
    {
        public String RegionCd { get; set; }
        public String RegionType { get; set; }
        public String CompanyCd { get; set; }
        public DateTime EffectiveFrom { get; set; }
        public DateTime EffectiveTo { get; set; }
        [Visible(false)]
        public DateTime LoadDt { get; set; }
    }
}