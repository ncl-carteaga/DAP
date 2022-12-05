using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DAP.NCLHDSAR.Lookups
{
    using DAP.NCLHDSAR.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class SourceLookupEditor : RowLookupScript<MarketingRequestSourcesRow>
    {
        public SourceLookupEditor()
        {
            IdField = MarketingRequestSourcesRow.Fields.Id.PropertyName;
            TextField = MarketingRequestSourcesRow.Fields.Description.PropertyName;
        }
    }
}