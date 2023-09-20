namespace DAP.DWSupport.Lookups
{
    using Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    //  =============== [MODULE FOR SHIP CODE LOOKUPS] =============== //
    //      ShipRow can be used as a lookup script. However,
    //      this module will filter the codes by specific Brand.
    //  =============== ============================ =============== //

    [LookupScript(Permission = "*")]
    public class ONRShipCodeLookupEditor : RowLookupScript<Entities.ShipRow>
    {
        public ONRShipCodeLookupEditor()
        {
            IdField = TextField = ShipRow.Fields.ShipCode.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var flds = Entities.ShipRow.Fields;

            // Dynamic drop-down based on user authorization
            // Ship codes will be selected depending on brand

            if (Authorization.HasPermission(PermissionKeys.Oceania))
            {
                query.Distinct(true)
                    .Select(flds.ShipCode)
                    .Where(
                        new Criteria(flds.Brand) == "OCI"
                        &&
                        new Criteria(flds.IsActive) == 1
                    );
            }
            else if (Authorization.HasPermission(PermissionKeys.Regent))
            {
                query.Distinct(true)
                    .Select(flds.ShipCode)
                    .Where(
                        new Criteria(flds.Brand) == "RSSC"
                        &&
                        new Criteria(flds.IsActive) == 1
                    );
            }
        }
    }
}