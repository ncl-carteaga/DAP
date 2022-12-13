namespace DAP.PCHODS.Lookups
{
    using DAP.PCHODS.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class InboundUserOverrideDescriptionLookupEditor : RowLookupScript<InboundUserOverrideDescriptionRow>
    {
        public InboundUserOverrideDescriptionLookupEditor()
        {
            IdField = InboundUserOverrideDescriptionRow.Fields.Id.PropertyName;
            TextField = InboundUserOverrideDescriptionRow.Fields.Description.PropertyName;
        }
    }
}