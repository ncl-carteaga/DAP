
namespace DAP.NCLHDSAR.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("NCLHDSAR.Assignee")]
    [BasedOnRow(typeof(Entities.AssigneeRow), CheckNames = true)]
    public class AssigneeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 AssigneeId { get; set; }
        [EditLink]
        public String FullName { get; set; }
        public Boolean IsActive { get; set; }
    }
}