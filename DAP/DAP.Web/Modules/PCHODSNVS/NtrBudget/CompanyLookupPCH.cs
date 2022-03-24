namespace DAP.PCHODS.Lookups
{
    using DAP.PCHODS.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class CompanyLookupPCH : RowLookupScript<OutboundCompanyRow>
    {
        public CompanyLookupPCH()
        {
            IdField = OutboundCompanyRow.Fields.Cd.PropertyName;
            TextField = OutboundCompanyRow.Fields.Nm.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.OutboundCompanyRow.Fields;
            query.Distinct(true)
                .Select(fld.Cd, fld.Nm)
                .Where(
                    new Criteria(fld.Cd) == "100" |
                    new Criteria(fld.Cd) == "110");
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}