

namespace DAP.NCLHDSAR.Lookups
{
    using DAP.NCLHDSAR.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class OptOutLookupEditor : RowLookupScript<MarketingRequestOptOutStatusRow>
    {
        public OptOutLookupEditor()
        {
            IdField = MarketingRequestOptOutStatusRow.Fields.Id.PropertyName;
            TextField = MarketingRequestOptOutStatusRow.Fields.Description.PropertyName;
        }
    }
}