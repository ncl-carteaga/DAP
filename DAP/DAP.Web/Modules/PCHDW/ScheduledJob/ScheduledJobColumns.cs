
namespace DAP.PCHDW.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PCHDW.ScheduledJob")]
    [BasedOnRow(typeof(Entities.ScheduledJobRow), CheckNames = true)]
    public class ScheduledJobColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ScheduledJobId { get; set; }
        [EditLink]
        public String JobName { get; set; }
        public String JobDescription { get; set; }
    }
}