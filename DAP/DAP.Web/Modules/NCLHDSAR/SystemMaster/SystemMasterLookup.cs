namespace DAP.NCLHDSAR.Lookups
{

    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class SystemMasterLookup : RowLookupScript<SystemMasterRow>
    {
        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);
            var fld = SystemMasterRow.Fields;
            query.OrderBy(fld.Id);
        }
        public SystemMasterLookup()
        {
            IdField = SystemMasterRow.Fields.Id.PropertyName;
            TextField = SystemMasterRow.Fields.SystemName.PropertyName;
        }
    }
}