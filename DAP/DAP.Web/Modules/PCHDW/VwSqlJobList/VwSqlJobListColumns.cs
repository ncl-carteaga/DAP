
namespace DAP.PCHDW.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PCHDW.VwSqlJobList")]
    [BasedOnRow(typeof(Entities.VwSqlJobListRow), CheckNames = true)]
    public class VwSqlJobListColumns
    {
        public String Name { get; set; }
        public String JobDescription { get; set; }
        public Int16 Enabled { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }
    }
}