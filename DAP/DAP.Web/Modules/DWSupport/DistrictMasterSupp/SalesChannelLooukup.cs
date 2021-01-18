
namespace DAP.DWSupport.Lookups
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class SalesChannelLookup : RowLookupScript<Entities.DistrictMasterSuppRow>
    {
        public SalesChannelLookup()
        {
            IdField = TextField = DistrictMasterSuppRow.Fields.SalesChannelCd.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.DistrictMasterSuppRow.Fields;
            query.Distinct(true)
                .Select(fld.SalesChannelCd)
                .Where(
                    new Criteria(fld.SalesChannelCd).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}