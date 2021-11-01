
namespace DAP.PCHDW.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PCHDW.VwSqlJobList")]
    [BasedOnRow(typeof(Entities.VwSqlJobListRow), CheckNames = true)]
    public class VwSqlJobListForm
    {
        public Int16 Enabled { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }
    }
}