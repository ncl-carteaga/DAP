
namespace DAP.PCHODS.Lookups
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PCHODS.OutboundAgentLocation")]
    [BasedOnRow(typeof(Entities.OutboundAgentLocationRow), CheckNames = true)]
    public class OutboundAgentLocationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 AgentLocationId { get; set; }
        [EditLink]
        public String Description { get; set; }
    }
}