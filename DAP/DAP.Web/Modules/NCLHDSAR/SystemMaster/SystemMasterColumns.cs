
namespace DAP.NCLHDSAR.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("NCLHDSAR.SystemMaster")]
    [BasedOnRow(typeof(Entities.SystemMasterRow), CheckNames = true)]
    public class SystemMasterColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String SystemName { get; set; }
        public String SystemTable { get; set; }
        public String SystemDesc { get; set; }
        public String SystemActiveYn { get; set; }
    }
}