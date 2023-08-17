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
    public class ONRShipCodeLookupEditor : RowLookupScript<Entities.ShipRow>
    {
        public ONRShipCodeLookupEditor()
        {
            IdField = TextField = ShipRow.Fields.ShipCode.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.ShipRow.Fields;
            query.Distinct(true)
                .Select(fld.ShipCode)
                .Where(
                    new Criteria(fld.Brand) == "OCI" 
                    |
                    new Criteria(fld.Brand) == "RSSC"
                );
        }
    }
}