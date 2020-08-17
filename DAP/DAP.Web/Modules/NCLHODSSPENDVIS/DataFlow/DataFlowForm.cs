
namespace DAP.NCLHODSSPENDVIS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("NCLHODSSPENDVIS.DataFlow")]
    [BasedOnRow(typeof(Entities.DataFlowRow), CheckNames = true)]
    public class DataFlowForm
    {
        public String Source { get; set; }
        public String Name { get; set; }
        public String ProcessYn { get; set; }
        public String Target { get; set; }
        public String Description { get; set; }
        public String Package { get; set; }
        public Int32 Status { get; set; }
        public DateTime Lset { get; set; }
        public DateTime Cet { get; set; }
    }
}