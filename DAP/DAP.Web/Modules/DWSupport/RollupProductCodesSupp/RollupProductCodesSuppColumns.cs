
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.RollupProductCodesSupp")]
    [BasedOnRow(typeof(Entities.RollupProductCodesSuppRow), CheckNames = true)]
    public class RollupProductCodesSuppColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int16 RollupProductSurKey { get; set; }
        [EditLink]
        public String ProductCd { get; set; }
        public String RmRollupProductCd { get; set; }
        public String RmRollupProductDesc { get; set; }
        public String BrochureRollupProductCd { get; set; }
        public String BrochureRollupProductDesc { get; set; }
        public String CreatedByNam { get; set; }
        public DateTime CreatedTs { get; set; }
        public String ModifiedByNam { get; set; }
        public DateTime ModifiedTs { get; set; }
    }
}