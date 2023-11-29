
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.MarketingTollfreeBrandInventory")]
    [BasedOnRow(typeof(Entities.MarketingTollfreeBrandInventoryRow), CheckNames = true)]
    public class MarketingTollfreeBrandInventoryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public Int32 BrandId { get; set; }
        [EditLink]
        public String Location { get; set; }
        public String TollFreeNumber { get; set; }
        public String Description { get; set; }
        public String Vdn { get; set; }
        public String ModifiedBy { get; set; }
        public String CreatedBy { get; set; }
        public DateTime ModifiedTs { get; set; }
        public DateTime CreatedTs { get; set; }
    }
}