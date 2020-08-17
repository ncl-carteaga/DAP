
namespace DAP.PCHODS.Lookups
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class OutboundMonthLookup : RowLookupScript<Entities.OutboundMonthlyRptArchiveOverrideRow>
    {
        public OutboundMonthLookup()
        {
            IdField = TextField = OutboundMonthlyRptArchiveOverrideRow.Fields.OutboundMonth.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.OutboundMonthlyRptArchiveOverrideRow.Fields;
            query.Distinct(true)
                .Select(fld.OutboundMonth)
                .Where(
                    new Criteria(fld.OutboundMonth) != "" &
                    new Criteria(fld.OutboundMonth).IsNotNull())
                 .OrderBy(fld.OutboundMonth);
        }

        protected override void ApplyOrder(SqlQuery query)
        {
            //base.PrepareQuery(query.OrderBy("OutboundMonth",true));
        }
    }
}