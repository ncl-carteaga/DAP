namespace DAP.PCHODS.Lookups
{
    using DAP.PCHODS.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class UarEmployeeDirectreportsLookupEditor : RowLookupScript<UarEmployeeDirectreportsRow>
    {
        public UarEmployeeDirectreportsLookupEditor()
        {
            IdField = UarEmployeeDirectreportsRow.Fields.EmployeeId.PropertyName;
            TextField = UarEmployeeDirectreportsRow.Fields.SupFirstName.PropertyName;
        }
    }
}