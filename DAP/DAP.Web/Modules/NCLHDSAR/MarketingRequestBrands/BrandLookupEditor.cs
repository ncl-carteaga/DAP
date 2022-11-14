
namespace DAP.NCLHDSAR.Lookups
{
    using DAP.NCLHDSAR.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class BrandLookupEditor : RowLookupScript<MarketingRequestBrandsRow>
    {
        public BrandLookupEditor()
        {
            IdField = MarketingRequestBrandsRow.Fields.Id.PropertyName;
            TextField = MarketingRequestBrandsRow.Fields.Description.PropertyName;
        }
    }
}