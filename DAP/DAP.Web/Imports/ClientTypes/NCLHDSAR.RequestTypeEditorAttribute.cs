using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace DAP.NCLHDSAR
{
    public partial class RequestTypeEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "DAP.NCLHDSAR.RequestTypeEditor";

        public RequestTypeEditorAttribute()
            : base(Key)
        {
        }
    }
}

