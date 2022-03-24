using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace DAP.PCHODSNVS
{
    public partial class SelectPCHCompanyEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "DAP.PCHODSNVS.SelectPCHCompanyEditor";

        public SelectPCHCompanyEditorAttribute()
            : base(Key)
        {
        }
    }
}

