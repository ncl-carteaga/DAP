
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.SlProductCodeSupp")]
    [BasedOnRow(typeof(Entities.SlProductCodeSuppRow), CheckNames = true)]
    public class SlProductCodeSuppForm
    {
        public String SlProductCd { get; set; }
        public String SlProductDesc { get; set; }
        [Visible(false)]
        public DateTime CreatedTs { get; set; }
        [Visible(false)]
        public String CreatedByName { get; set; }
        [Visible(false)]
        public String ModifiedByName { get; set; }
        [Visible(false)]
        public DateTime ModifiedTs { get; set; }
    }
}