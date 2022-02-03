
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.Detail")]
    [BasedOnRow(typeof(Entities.DetailRow), CheckNames = true)]
    public class DetailColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 DetailId { get; set; }
        public Int32 Key1 { get; set; }
        public Int32 Key2 { get; set; }
        [EditLink]
        public String Value1 { get; set; }
        public String Value2 { get; set; }
    }
}