
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.PortSubstitutionSupp")]
    [BasedOnRow(typeof(Entities.PortSubstitutionSuppRow), CheckNames = true)]
    public class PortSubstitutionSuppForm
    {
        public String PortCd { get; set; }
        public String PortNam { get; set; }
        public String PortSubstitutonNam { get; set; }
        public String CommentTxt { get; set; }
        [Visible(false)]
        public DateTime CreatedTs { get; set; }
        [Visible(false)]
        public String CreatedByNam { get; set; }
        [Visible(false)]
        public String ModifiedByNam { get; set; }
        [Visible(false)]
        public DateTime ModifiedTs { get; set; }
    }
}