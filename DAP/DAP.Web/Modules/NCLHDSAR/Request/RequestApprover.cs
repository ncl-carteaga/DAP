
namespace DAP.NCLHDSAR.Lookups
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class RequestApproverLookup : RowLookupScript<Entities.RequestRow>
    {
        public RequestApproverLookup()
        {
            IdField = TextField = RequestRow.Fields.ReqApprover.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.RequestRow.Fields;
            query.Distinct(true)
                .Select(fld.ReqApprover)
                .Where(
                    new Criteria(fld.ReqApprover) != "" &
                    new Criteria(fld.ReqApprover).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}