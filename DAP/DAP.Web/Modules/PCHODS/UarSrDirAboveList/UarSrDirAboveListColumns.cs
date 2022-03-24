
namespace DAP.PCHODS.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PCHODS.UarSrDirAboveList")]
    [BasedOnRow(typeof(Entities.UarSrDirAboveListRow), CheckNames = true)]
    public class UarSrDirAboveListColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Jobtitle { get; set; }
        public Int32 IsSrDirAbove { get; set; }
        public DateTime DateEffective { get; set; }
        public DateTime DateExpires { get; set; }
        public String RowChangeReason { get; set; }
    }
}