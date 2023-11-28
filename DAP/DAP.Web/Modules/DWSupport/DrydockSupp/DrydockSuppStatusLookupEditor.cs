using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DAP.DWSupport.Lookups
{
    [Serenity.ComponentModel.LookupScript("Custom.DrydockStatusLookupEditor", Expiration = -1)]
    public class DrydockStatusLookupEditor : Serenity.Web.LookupScript
    {
        public DrydockStatusLookupEditor()
        {
            this.IdField = "Status";
            this.TextField = "Status";
            this.getItems = () => { return this.GetItems(); };
        }

        protected virtual IEnumerable<dynamic> GetItems()
        {
            return new[]{
                new { Status = "DD" },
                new { Status = "DH" }
            };
        }
    }
}