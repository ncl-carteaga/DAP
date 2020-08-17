
namespace DAP.NCLHODSSPENDVIS.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("NCLHODSSPENDVIS.Amoslevel")]
    [BasedOnRow(typeof(Entities.AmoslevelRow), CheckNames = true)]
    public class AmoslevelForm
    {
        public String AccountId { get; set; }
        public String Descr { get; set; }
        public String FlexDim1Name { get; set; }
        public String FlexDim2Name { get; set; }
        public String FlexDim3Name { get; set; }
        public String FlexDim4Name { get; set; }
    }
}