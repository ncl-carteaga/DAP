namespace DAP.DWSupport.Lookups
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using PCHDW.Entities;

    //  =============== [MODULE FOR COMPANY CODE LOOKUPS] =============== //
    //      DimCompany Row can be used as a lookup script. However,
    //      this module will filter the codes by specific Description.
    //  =============== ============================ =============== //

    [LookupScript]
    public class CompanyCDONRLookupEditor : RowLookupScript<DimCompanyRow>
    {
        public CompanyCDONRLookupEditor()
        {
            IdField = TextField = DimCompanyRow.Fields.CompanyCd.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = DimCompanyRow.Fields;
            query.Distinct(false)
                .Select(fld.CompanyCd)
                .Where(
                    new Criteria(fld.CompanyCd) == 100
                    |
                    new Criteria(fld.CompanyCd) == 110
                );
        }
    }
}