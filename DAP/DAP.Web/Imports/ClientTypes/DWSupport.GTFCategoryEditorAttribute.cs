using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace DAP.DWSupport
{
    public partial class GTFCategoryEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "DAP.DWSupport.GTFCategoryEditor";

        public GTFCategoryEditorAttribute()
            : base(Key)
        {
        }
    }
}

