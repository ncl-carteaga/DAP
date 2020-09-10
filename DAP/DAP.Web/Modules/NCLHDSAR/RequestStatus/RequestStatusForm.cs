
namespace DAP.NCLHDSAR.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("NCLHDSAR.RequestStatus")]
    [BasedOnRow(typeof(Entities.RequestStatusRow), CheckNames = true)]
    public class RequestStatusForm
    {
        public String StatusDescription { get; set; }
        public Int32 StatusOrder { get; set; }
    }
}