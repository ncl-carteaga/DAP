
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
        public String MetaPriceProgramCd { get; set; }
        public String SuperPriceProgramCd { get; set; }
        public Int32 MetaPricePrgrmPriorityNbr { get; set; }
        public String MetaPriceProgramDesc { get; set; }
        public String MetaMetaPriceProgramCd { get; set; }
        public String MetaMetaPriceProgramDesc { get; set; }
        public String CreatedTs { get; set; }
        public String CreatedByNam { get; set; }
        public String ModifiedByNam { get; set; }
        public String ModifiedTs { get; set; }
    }
}