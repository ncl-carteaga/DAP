
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.Master")]
    [BasedOnRow(typeof(Entities.MasterRow), CheckNames = true)]
    public class MasterForm
    {
        public Int32 Key1 { get; set; }
        public Int32 Key2 { get; set; }
        public String Comment { get; set; }
    }
}