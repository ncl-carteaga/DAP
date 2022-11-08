

namespace DAP.NCLHDSAR.Lookups
{
    using DAP.NCLHDSAR.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class ChannelLookupEditor : RowLookupScript<MarketingRequestChannelsRow>
    {
        public ChannelLookupEditor()
        {
            IdField = MarketingRequestChannelsRow.Fields.Id.PropertyName;
            TextField = MarketingRequestChannelsRow.Fields.Description.PropertyName;
        }
    }
}