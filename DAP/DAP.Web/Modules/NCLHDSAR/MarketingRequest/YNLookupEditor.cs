using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DAP.NCLHDSAR.Lookups
{
    [Serenity.ComponentModel.LookupScript("Custom.YNLookupEditor", Expiration = -1)]
    public class YNLookupEditor : Serenity.Web.LookupScript
    {
        public YNLookupEditor()
        {
            this.IdField = "Id";
            this.TextField = "ContactId";
            this.getItems = () => { return this.GetItems(); };
        }

        protected virtual IEnumerable<dynamic> GetItems()
        {
            return new[]{
                new { ContactId = "Yes" },
                new { ContactId = "No" }
            };
        }
    }
}