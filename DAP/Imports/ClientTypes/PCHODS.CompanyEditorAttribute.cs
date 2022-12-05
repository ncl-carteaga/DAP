using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace DAP.PCHODS
{
    public partial class CompanyEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "DAP.PCHODS.CompanyEditor";

        public CompanyEditorAttribute()
            : base(Key)
        {
        }
    }
}

