
namespace DAP.DWSupport.Lookups
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class AreaLookup : RowLookupScript<Entities.DistrictMasterSuppRow>
    {
        public AreaLookup()
        {
            IdField = TextField = DistrictMasterSuppRow.Fields.AreaCd.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.DistrictMasterSuppRow.Fields;
            query.Distinct(true)
                .Select(fld.AreaCd)
                .Where(
                    new Criteria(fld.AreaCd).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}