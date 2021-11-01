using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace DAP.PCHODS
{
    public partial class SelectCompanyAUEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "DAP.PCHODS.SelectCompanyAUEditor";

        public SelectCompanyAUEditorAttribute()
            : base(Key)
        {
        }
    }
}

