
namespace DAP.DWSupport.Lookups
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class ChannelLookup : RowLookupScript<Entities.DistrictMasterSuppRow>
    {
        public ChannelLookup()
        {
            IdField = TextField = DistrictMasterSuppRow.Fields.RmChannelCd.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.DistrictMasterSuppRow.Fields;
            query.Distinct(true)
                .Select(fld.RmChannelCd)
                .Where(
                    new Criteria(fld.RmChannelCd).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}