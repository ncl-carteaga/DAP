
namespace DAP.PCHODS.Lookups
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PCHODS.OutboundAgent")]
    [BasedOnRow(typeof(Entities.OutboundAgentRow), CheckNames = true)]
    public class OutboundAgentColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, Visible(false)]
        public Int32 AgentId { get; set; }
        [EditLink]
        public String NvsUserId { get; set; }
        public String CompanyName { get; set; }                
        public String Nm { get; set; }
        public String CobrandInd { get; set; }
        public String TeamCompanyName { get; set; }
        [DisplayName("Location")]
        public String AgentLocationDescription { get; set; }
        public DateTime StartInactiveDt { get; set; }
        
    }
}