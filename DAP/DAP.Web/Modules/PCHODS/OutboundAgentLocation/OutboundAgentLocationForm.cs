
namespace DAP.PCHODS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PCHODS.OutboundAgentLocation")]
    [BasedOnRow(typeof(Entities.OutboundAgentLocationRow), CheckNames = true)]
    public class OutboundAgentLocationForm
    {
        public String Description { get; set; }
    }
}