
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.ProductCodeSupp")]
    [BasedOnRow(typeof(Entities.ProductCodeSuppRow), CheckNames = true)]
    public class ProductCodeSuppColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ProductSurKey { get; set; }
        [EditLink]
        public String ProductCd { get; set; }
        public String ProductDesc { get; set; }
        public Int32 ProductCodeId { get; set; }
        public String CreatedByName { get; set; }
        public DateTime CreatedTs { get; set; }
        public String ModifiedByName { get; set; }
        public DateTime ModifiedTs { get; set; }
    }
}