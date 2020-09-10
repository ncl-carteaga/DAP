namespace DAP.NCLHDSAR.Lookups
{

    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Web;

    [LookupScript]
    public class AssigneeLookup : RowLookupScript<AssigneeRow>
    {
        public AssigneeLookup()
        {
            IdField = AssigneeRow.Fields.AssigneeId.PropertyName;
            TextField = AssigneeRow.Fields.FullName.PropertyName;
        }
    }
}