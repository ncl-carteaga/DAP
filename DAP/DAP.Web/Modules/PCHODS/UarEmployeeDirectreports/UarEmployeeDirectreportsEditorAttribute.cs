using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace DAP.PCHODS
{
    public class UarEmployeeDirectreportsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "DAP.PCHODS.UarEmployeeDirectreportsEditor";

        public UarEmployeeDirectreportsEditorAttribute()
            : base(Key)
        {
        }
    }
}