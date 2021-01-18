
namespace DAP.DWSupport.Lookups
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class ChannelCdLookup : RowLookupScript<Entities.DistrictMasterSuppRow>
    {
        public ChannelCdLookup()
        {
            IdField = TextField = DistrictMasterSuppRow.Fields.ChannelCd.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.DistrictMasterSuppRow.Fields;
            query.Distinct(true)
                .Select(fld.ChannelCd)
                .Where(
                    new Criteria(fld.ChannelCd).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}