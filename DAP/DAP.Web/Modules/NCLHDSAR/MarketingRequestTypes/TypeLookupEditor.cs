
namespace DAP.NCLHDSAR.Lookups
{
    using DAP.NCLHDSAR.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class TypeLookupEditor : RowLookupScript<MarketingRequestTypesRow>
    {
        public TypeLookupEditor()
        {
            IdField = MarketingRequestTypesRow.Fields.Id.PropertyName;
            TextField = MarketingRequestTypesRow.Fields.Description.PropertyName;
        }
    }
}