
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.ImportErrorLog")]
    [BasedOnRow(typeof(Entities.ImportErrorLogRow), CheckNames = true)]
    public class ImportErrorLogForm
    {
        [Visible(false)]
        public Int32 RunNumber { get; set; }
        public DateTime ImportDate { get; set; }
        public String Calledby { get; set; }
        [Visible(false)]
        public String FileName { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String ErrorMessage { get; set; }
    }
}