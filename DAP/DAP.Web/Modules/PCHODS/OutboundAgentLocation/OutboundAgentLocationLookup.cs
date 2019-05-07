namespace DAP.PCHODS.Lookups
{
    using DAP.PCHODS.Entities;    
    using Serenity.ComponentModel;
    using Serenity.Web;

    [LookupScript]
    public class OutboundAgentLocationLookup : RowLookupScript<OutboundAgentLocationRow>
    {
        public OutboundAgentLocationLookup()
        {
            IdField = OutboundAgentLocationRow.Fields.AgentLocationId.PropertyName;
            TextField = OutboundAgentLocationRow.Fields.Description.PropertyName;
        }
    }
}