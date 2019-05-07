
namespace DAP.NCLHDSAR.Lookups
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class UsersLookup : RowLookupScript<Entities.RequestRow>
    {
        public UsersLookup()
        {
            IdField = TextField = RequestRow.Fields.ReqStatus.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.RequestRow.Fields;
            query.Distinct(true)
                .Select(fld.ReqStatus)                
                .Where(                    
                    new Criteria(fld.ReqStatus).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}