namespace DAP.NCLHDSAR.Lookups
{

    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Web;

    [LookupScript]
    public class RequestTypeLookup : RowLookupScript<RequestTypeRow>
    {
        public RequestTypeLookup()
        {
            IdField = RequestTypeRow.Fields.Type.PropertyName;
            TextField = RequestTypeRow.Fields.Desc.PropertyName;
        }
    }
}

