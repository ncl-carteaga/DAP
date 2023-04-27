namespace DAP.DWSupport.Lookups
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    //  =============== [MODULE FOR SHIP CODE LOOKUPS] =============== //
    //      ShipRow can be used as a lookup script. However,
    //      this module will filter the codes by specific Brand.
    //  =============== ============================ =============== //

    [LookupScript]
    public class RollupProductCodesSuppLookupEditor : RowLookupScript<Entities.ProductCodeSuppRow>
    {
        public RollupProductCodesSuppLookupEditor()
        {
            IdField = TextField = ProductCodeSuppRow.Fields.ProductCd.PropertyName;
        }
    }
}