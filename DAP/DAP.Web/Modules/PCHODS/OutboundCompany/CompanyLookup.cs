namespace DAP.PCHODS.Lookups
{
    using DAP.PCHODS.Entities;
    using Serenity.ComponentModel;
    using Serenity.Web;

    [LookupScript]
    public class CompanyLookup : RowLookupScript<OutboundCompanyRow>
    {
        public CompanyLookup()
        {
            IdField = OutboundCompanyRow.Fields.Cd.PropertyName;
            TextField = OutboundCompanyRow.Fields.Nm.PropertyName;
        }
    }
}