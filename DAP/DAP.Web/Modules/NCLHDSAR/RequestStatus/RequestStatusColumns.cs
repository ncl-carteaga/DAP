
namespace DAP.NCLHDSAR.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("NCLHDSAR.RequestStatus")]
    [BasedOnRow(typeof(Entities.RequestStatusRow), CheckNames = true)]
    public class RequestStatusColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 StatusId { get; set; }
        [EditLink]
        public String StatusDescription { get; set; }
        public Int32 StatusOrder { get; set; }
    }
}