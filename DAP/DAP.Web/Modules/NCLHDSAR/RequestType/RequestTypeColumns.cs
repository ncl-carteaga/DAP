
namespace DAP.NCLHDSAR.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("NCLHDSAR.RequestType")]
    [BasedOnRow(typeof(Entities.RequestTypeRow), CheckNames = true)]
    public class RequestTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Type { get; set; }
        [EditLink]
        public String Desc { get; set; }
    }
}