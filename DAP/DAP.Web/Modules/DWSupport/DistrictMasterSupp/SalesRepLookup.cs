
namespace DAP.DWSupport.Lookups
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class SalesRepLookup : RowLookupScript<Entities.DistrictMasterSuppRow>
    {
        public SalesRepLookup()
        {
            IdField = TextField = DistrictMasterSuppRow.Fields.SalesrepUserId.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.DistrictMasterSuppRow.Fields;
            query.Distinct(true)
                .Select(fld.SalesrepUserId)
                .Where(
                    new Criteria(fld.SalesrepUserId).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}