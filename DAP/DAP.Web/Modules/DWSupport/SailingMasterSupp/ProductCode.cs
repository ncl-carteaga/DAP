
namespace DAP.DWSupport.Lookups
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class ProductCodeLookup : RowLookupScript<Entities.ProductCodeSuppRow>
    {
        public ProductCodeLookup()
        {
            IdField = ProductCodeSuppRow.Fields.ProductCd.PropertyName;
            TextField = ProductCodeSuppRow.Fields.ProductDesc.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.ProductCodeSuppRow.Fields;
            query.Distinct(true)
                .Select(fld.ProductCd, fld.ProductDesc)
                .Where(
                    new Criteria(fld.ProductCd).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}