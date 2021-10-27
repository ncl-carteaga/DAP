
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.SlProductCodeSupp")]
    [BasedOnRow(typeof(Entities.SlProductCodeSuppRow), CheckNames = true)]
    public class SlProductCodeSuppColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SlProductSurKey { get; set; }
        [EditLink]
        public String SlProductCd { get; set; }
        public String SlProductDesc { get; set; }
        public String CreatedByName { get; set; }
        public DateTime CreatedTs { get; set; }
        public String ModifiedByName { get; set; }
        public DateTime ModifiedTs { get; set; }
    }
}