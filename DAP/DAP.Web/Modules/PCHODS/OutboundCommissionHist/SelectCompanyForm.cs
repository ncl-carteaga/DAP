
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

    [FormScript("PCHODS.SelectCompany")]
    public class SelectCompanyForm
    {
        [DisplayName("Please select the Company:"),SelectCompanyEditor ,LabelWidth(200)]
        public String CompanyCd { get; set; }
    }
}