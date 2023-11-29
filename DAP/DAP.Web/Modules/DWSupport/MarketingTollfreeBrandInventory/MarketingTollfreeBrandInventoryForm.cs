
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.MarketingTollfreeBrandInventory")]
    [BasedOnRow(typeof(Entities.MarketingTollfreeBrandInventoryRow), CheckNames = true)]
    public class MarketingTollfreeBrandInventoryForm
    {
        public Int32 BrandId { get; set; }
        public String Location { get; set; }
        public String TollFreeNumber { get; set; }
        public String Description { get; set; }
        public String Vdn { get; set; }
        [Visible(false)]
        public String ModifiedBy { get; set; }
        [Visible(false)]
        public String CreatedBy { get; set; }
        [Visible(false)]
        public DateTime ModifiedTs { get; set; }
        [Visible(false)]
        public DateTime CreatedTs { get; set; }
    }
}