namespace DAP.NCLHDSAR.Lookups
{

    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Web;

    [LookupScript]
    public class SystemMasterLookup : RowLookupScript<SystemMasterRow>
    {
        public SystemMasterLookup()
        {
            IdField = SystemMasterRow.Fields.Id.PropertyName;
            TextField = SystemMasterRow.Fields.SystemName.PropertyName;
        }
    }
}