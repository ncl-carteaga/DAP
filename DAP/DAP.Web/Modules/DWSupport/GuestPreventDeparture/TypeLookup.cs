
namespace DAP.DWSupport.Lookups
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class TypeLookup : RowLookupScript<Entities.GuestPreventDepartureRow>
    {
        public TypeLookup()
        {
            IdField = TextField = GuestPreventDepartureRow.Fields.TypeCd.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.GuestPreventDepartureRow.Fields;
            query.Distinct(true)
                .Select(fld.TypeCd)
                .Where(
                    new Criteria(fld.TypeCd).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}