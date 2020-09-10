
namespace DAP.SSISConfig.Lookups
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class ConfigurationFilterLookup : RowLookupScript<Entities.SsisConfigBaseRow>
    {
        public ConfigurationFilterLookup()
        {
            IdField = SsisConfigBaseRow.Fields.ConfigurationFilter.PropertyName;
            TextField = SsisConfigBaseRow.Fields.ConfigurationFilter.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.SsisConfigBaseRow.Fields;
            query.Distinct(true)
                .Select(fld.ConfigurationFilter)
                .Where(
                    new Criteria(fld.ConfigurationFilter) != "" &
                    new Criteria(fld.ConfigurationFilter).IsNotNull())
                .OrderBy(fld.ConfigurationFilter);
        }

        protected override void ApplyOrder(SqlQuery query)
        {
            //base.PrepareQuery(query.OrderBy("ConfigurationFilter"));
        }
    }
}