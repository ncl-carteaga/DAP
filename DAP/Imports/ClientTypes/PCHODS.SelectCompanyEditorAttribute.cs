using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace DAP.PCHODS
{
    public partial class SelectCompanyEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "DAP.PCHODS.SelectCompanyEditor";

        public SelectCompanyEditorAttribute()
            : base(Key)
        {
        }
    }
}

