
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.RegionMasterSupp")]
    [BasedOnRow(typeof(Entities.RegionMasterSuppRow), CheckNames = true)]
    public class RegionMasterSuppForm
    {
        public Int32 Id { get; set; }
        public String RegionCd { get; set; }
        public String ResponsibilityDesc { get; set; }
        public String SalesrepUserId { get; set; }
        [Visible(false)]
        public String CreatedByNam { get; set; }
        [Visible(false)]
        public DateTimeField CreatedTs { get; set; }
        [Visible(false)]
        public String ModifiedByNam { get; set; }
        [Visible(false)]
        public DateTimeField ModifiedTs { get; set; }
    }
}