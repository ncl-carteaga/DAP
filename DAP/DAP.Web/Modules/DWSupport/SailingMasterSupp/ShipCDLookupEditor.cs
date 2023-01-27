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
    public class ShipCDLookupEditor : RowLookupScript<Entities.ShipRow>
    {
        public ShipCDLookupEditor()
        {
            IdField = TextField = ShipRow.Fields.ShipCode.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.ShipRow.Fields;
            query.Distinct(true)
                .Select(fld.ShipCode)
                .Where(
                    new Criteria(fld.Brand) == "NCL"
                );
        }
    }
}