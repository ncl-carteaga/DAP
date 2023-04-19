
namespace DAP.PCHODS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PCHODS.InboundUserOverride")]
    [BasedOnRow(typeof(Entities.InboundUserOverrideRow), CheckNames = true)]
    public class InboundUserOverrideForm
    {
        public String Company { get; set; }
        public String Invoice { get; set; }
        public String UserAssign { get; set; }
        public Int16 ItDescription { get; set; }
        public String Inbound { get; set; }
        public String Comments { get; set; }
    }
}