
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.Detail")]
    [BasedOnRow(typeof(Entities.DetailRow), CheckNames = true)]
    public class DetailForm
    {
        public Int32 Key1 { get; set; }
        public Int32 Key2 { get; set; }
        public String Value1 { get; set; }
        public String Value2 { get; set; }
    }
}