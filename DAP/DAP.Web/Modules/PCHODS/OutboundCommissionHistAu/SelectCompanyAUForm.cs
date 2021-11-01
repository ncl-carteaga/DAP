
namespace DAP.PCHODS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using DAP.PCHODS;

    [FormScript("PCHODS.SelectCompanyAU")]
    public class SelectCompanyAuForm
    {
        [DisplayName("Please select the Company:"),SelectCompanyAUEditor ,LabelWidth(200)]
        public String CompanyCd { get; set; }
        [DisplayName("Effective Date"), LabelWidth(200)]
        public DateTime EffectiveDt { get; set; }
    }
}