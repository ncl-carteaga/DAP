
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.ImportErrorLog")]
    [BasedOnRow(typeof(Entities.ImportErrorLogRow), CheckNames = true)]
    public class ImportErrorLogColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, Visible(false)]
        public Int32 ImportLogId { get; set; }
        [Visible(false)]
        public Int32 RunNumber { get; set; }
        [EditLink, Width(200), SortOrder(1, descending:true), DisplayFormat("g")]
        public DateTime ImportDate { get; set; }
        [Visible(false)]
        public String Calledby { get; set; }
        [Visible(false)]
        public String FileName { get; set; }
        [Width(1000)]
        public String ErrorMessage { get; set; }
    }
}