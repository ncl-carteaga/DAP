using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace DAP.NCLHDSAR
{
    public partial class SystemMasterEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "DAP.NCLHDSAR.SystemMasterEditor";

        public SystemMasterEditorAttribute()
            : base(Key)
        {
        }
    }
}

