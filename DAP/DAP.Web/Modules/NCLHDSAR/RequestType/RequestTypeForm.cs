
namespace DAP.NCLHDSAR.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("NCLHDSAR.RequestType")]
    [BasedOnRow(typeof(Entities.RequestTypeRow), CheckNames = true)]
    public class RequestTypeForm
    {
        public String Desc { get; set; }
    }
}