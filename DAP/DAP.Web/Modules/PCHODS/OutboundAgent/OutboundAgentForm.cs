
namespace DAP.PCHODS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PCHODS.OutboundAgent")]
    [BasedOnRow(typeof(Entities.OutboundAgentRow), CheckNames = true)]
    public class OutboundAgentForm
    {
        public String NvsUserId { get; set; }
        public String CompanyCd { get; set; }        
        public String PrimaryBrand { get; set; }
        public String AgentLocationId { get; set; }
        public DateTime StartInactiveDt { get; set; }
    }
}