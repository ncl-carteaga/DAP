namespace DAP.PCHODSNVS.Lookups
{
    using DAP.PCHDW.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class SegmentLookup : RowLookupScript<PCHDW.Entities.DimCruiseRow>
    {
        public SegmentLookup()
        {
            IdField = TextField = PCHDW.Entities.DimCruiseRow.Fields.CruiseSegmentCd.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = PCHDW.Entities.DimCruiseRow.Fields;
            query.Distinct(true)
                .Select(fld.CruiseSegmentCd)
                .Where(
                    new Criteria(fld.CompanyCd) == "100" |
                    new Criteria(fld.CompanyCd) == "110"); 
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}