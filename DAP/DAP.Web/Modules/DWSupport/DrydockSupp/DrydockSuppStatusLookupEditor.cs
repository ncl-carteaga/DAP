using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace DAP.DWSupport.Lookups
{
    [Serenity.ComponentModel.LookupScript("Custom.DrydockSuppStatusLookupEditor", Expiration = -1)]
    public class DrydockSuppStatusLookupEditor : Serenity.Web.LookupScript
    {
        public DrydockSuppStatusLookupEditor() {
	        this.IdField = "Id";
	        this.TextField = "NameField";
	        this.getItems = () => { return this.GetItems(); };
	    }

        protected virtual IEnumerable<dynamic> GetItems()
        {
            return new[]{
                new { NameField = "DD" },
                new { NameField = "DH" }
	        };
	    }
    }
}