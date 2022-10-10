
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.RollupProductCodesSupp")]
    [BasedOnRow(typeof(Entities.RollupProductCodesSuppRow), CheckNames = true)]
    public class RollupProductCodesSuppForm
    {
        public String ProductCd { get; set; }
        public String RmRollupProductCd { get; set; }
        public String RmRollupProductDesc { get; set; }
        public String BrochureRollupProductCd { get; set; }
        public String BrochureRollupProductDesc { get; set; }
        [Visible(false)]
        public String CreatedByNam { get; set; }
        [Visible(false)]
        public DateTime CreatedTs { get; set; }
        [Visible(false)]
        public String ModifiedByNam { get; set; }
        [Visible(false)]
        public DateTime ModifiedTs { get; set; }
    }
}