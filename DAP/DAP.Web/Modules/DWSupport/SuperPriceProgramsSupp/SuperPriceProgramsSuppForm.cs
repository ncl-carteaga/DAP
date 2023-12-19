
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.SuperPriceProgramsSupp")]
    [BasedOnRow(typeof(Entities.SuperPriceProgramsSuppRow), CheckNames = true)]
    public class SuperPriceProgramsSuppForm
    {
        [HalfWidth]
        public String MetaPriceProgramCd { get; set; }
        [HalfWidth]
        public String SuperPriceProgramCd { get; set; }
        [HalfWidth]
        public Int32 MetaPricePrgrmPriorityNbr { get; set; }
        [HalfWidth]
        public String MetaPriceProgramDesc { get; set; }
        [HalfWidth]
        public String MetaMetaPriceProgramCd { get; set; }
        [HalfWidth]
        public String MetaMetaPriceProgramDesc { get; set; }
        [Visible(false)]
        public String CreatedTs { get; set; }
        [Visible(false)]
        public String CreatedByNam { get; set; }
        [Visible(false)]
        public String ModifiedByNam { get; set; }
        [Visible(false)]
        public String ModifiedTs { get; set; }
    }
}