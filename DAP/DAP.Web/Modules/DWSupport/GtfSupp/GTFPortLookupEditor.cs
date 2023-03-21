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
    public class GTFPortLookupEditor : RowLookupScript<Entities.VwGetSeaPortCodeRow>
    {
        public GTFPortLookupEditor()
        {
            IdField = TextField = VwGetSeaPortCodeRow.Fields.PortCode.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.VwGetSeaPortCodeRow.Fields;
            query.Distinct(true)
                .Select(fld.PortCode)
                .Where(
                    new Criteria(fld.PortCode) == "SEA" |
                    new Criteria(fld.PortCode) == "FAM" |
                    new Criteria(fld.PortCode) == "CLP");
        }
    }
}