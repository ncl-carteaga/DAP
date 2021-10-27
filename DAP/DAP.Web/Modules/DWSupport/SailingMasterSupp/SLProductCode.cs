
namespace DAP.DWSupport.Lookups
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class SLProductCodeLookup : RowLookupScript<Entities.SlProductCodeSuppRow>
    {
        public SLProductCodeLookup()
        {
            IdField = SlProductCodeSuppRow.Fields.SlProductCd.PropertyName;
            TextField = SlProductCodeSuppRow.Fields.SlProductDesc.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.SlProductCodeSuppRow.Fields;
            query.Distinct(true)
                .Select(fld.SlProductCd, fld.SlProductDesc)
                .Where(
                    new Criteria(fld.SlProductCd).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}