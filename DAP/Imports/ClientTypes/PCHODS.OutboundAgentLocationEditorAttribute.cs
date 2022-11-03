using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace DAP.PCHODS
{
    public partial class OutboundAgentLocationEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "DAP.PCHODS.OutboundAgentLocationEditor";

        public OutboundAgentLocationEditorAttribute()
            : base(Key)
        {
        }
    }
}

