
namespace DAP.PCHODSNVS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PCHODSNVS.GsaDistributionList")]
    [BasedOnRow(typeof(Entities.GsaDistributionListRow), CheckNames = true)]
    public class GsaDistributionListForm
    {
        public String CompanyCd { get; set; }
        public String AgencyCd { get; set; }
        public String AccountName { get; set; }
        public String ContactName { get; set; }
        public String Email { get; set; }
        [Visible(false)]
        public DateTime LoadDt { get; set; }
    }
}