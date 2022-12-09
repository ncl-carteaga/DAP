
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.PsGlAccountSupp")]
    [BasedOnRow(typeof(Entities.PsGlAccountSuppRow), CheckNames = true)]
    public class PsGlAccountSuppForm
    {
        public String SetId { get; set; }
        public String AccountId { get; set; }
        public String OlapAccountDesc { get; set; }
        public String GrossCostCd { get; set; }
        public String AccountClassType1Cd { get; set; }
        public String AccountClassType2Cd { get; set; }
        public String AccountClassType3Cd { get; set; }
        public String AccountClassType4Cd { get; set; }
        public DateTime CreatedTs { get; set; }
        public String CreatedByNam { get; set; }
        public String ModifiedByNam { get; set; }
        public DateTime ModifiedTs { get; set; }
    }
}