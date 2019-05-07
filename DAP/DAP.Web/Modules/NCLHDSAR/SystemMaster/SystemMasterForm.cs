
namespace DAP.NCLHDSAR.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("NCLHDSAR.SystemMaster")]
    [BasedOnRow(typeof(Entities.SystemMasterRow), CheckNames = true)]
    public class SystemMasterForm
    {
        public String SystemName { get; set; }
        public String SystemTable { get; set; }
        public String SystemDesc { get; set; }
        public String SystemActiveYn { get; set; }
    }
}