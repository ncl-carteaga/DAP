using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace DAP.DWSupport
{
    public partial class SelectYNEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "DAP.DWSupport.SelectYNEditor";

        public SelectYNEditorAttribute()
            : base(Key)
        {
        }
    }
}

