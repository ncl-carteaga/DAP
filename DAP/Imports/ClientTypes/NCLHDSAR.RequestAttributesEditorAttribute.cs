using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace DAP.NCLHDSAR
{
    public partial class RequestAttributesEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "DAP.NCLHDSAR.RequestAttributesEditor";

        public RequestAttributesEditorAttribute()
            : base(Key)
        {
        }
    }
}

