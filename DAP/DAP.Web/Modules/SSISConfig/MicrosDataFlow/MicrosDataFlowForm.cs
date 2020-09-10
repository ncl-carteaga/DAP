
namespace DAP.SSISConfig.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("SSISConfig.MicrosDataFlow")]
    [BasedOnRow(typeof(Entities.MicrosDataFlowRow), CheckNames = true)]
    public class MicrosDataFlowForm
    {
        public String Source { get; set; }
        public String Name { get; set; }
        public String ProcessYn { get; set; }
        public String Target { get; set; }
        public String Description { get; set; }
        public String SourceDesc { get; set; }
        public String TargetDesc { get; set; }
        public String Package { get; set; }
        public Int32 Status { get; set; }
        public DateTime Lset { get; set; }
        public DateTime Cet { get; set; }
        public Int32 LseIndex { get; set; }
        public Int32 CeIndex { get; set; }
    }
}