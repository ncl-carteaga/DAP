
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.Master")]
    [BasedOnRow(typeof(Entities.MasterRow), CheckNames = true)]
    public class MasterColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MasterId { get; set; }
        public Int32 Key1 { get; set; }
        public Int32 Key2 { get; set; }
        [EditLink]
        public String Comment { get; set; }
    }
}