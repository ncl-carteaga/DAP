using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace DAP.NCLHDSAR
{
    public partial class RequestValueEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "DAP.NCLHDSAR.RequestValueEditor";

        public RequestValueEditorAttribute()
            : base(Key)
        {
        }

        public Boolean Multiple
        {
            get { return GetOption<Boolean>("multiple"); }
            set { SetOption("multiple", value); }
        }
    }
}

