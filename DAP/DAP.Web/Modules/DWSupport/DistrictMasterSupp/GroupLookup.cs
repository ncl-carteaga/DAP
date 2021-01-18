
namespace DAP.DWSupport.Lookups
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class GroupLookup : RowLookupScript<Entities.DistrictMasterSuppRow>
    {
        public GroupLookup()
        {
            IdField = TextField = DistrictMasterSuppRow.Fields.GroupCd.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.DistrictMasterSuppRow.Fields;
            query.Distinct(true)
                .Select(fld.GroupCd)
                .Where(
                    new Criteria(fld.GroupCd).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}