
namespace DAP.NCLHDSAR.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("NCLHDSAR.SwRequestAttributes")]
    [BasedOnRow(typeof(Entities.SwRequestAttributesRow), CheckNames = true)]
    public class SwRequestAttributesForm
    {
        
        public String Id { get; set; }
        public Int32 SystemMasterId { get; set; }
        public String RequestValue { get; set; }
        public DateTime ResolvedDt { get; set; }
        public DateTime ExtractDt { get; set; }
      
        
    }
}