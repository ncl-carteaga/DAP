
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.ProductCodeSupp")]
    [BasedOnRow(typeof(Entities.ProductCodeSuppRow), CheckNames = true)]
    public class ProductCodeSuppForm
    {
        public String ProductCd { get; set; }
        public String ProductDesc { get; set; }
        public Int32 ProductCodeId { get; set; }
        [Visible(false)]
        public DateTime CreatedTs { get; set; }
        [Visible(false)]
        public String CreatedByName { get; set; }
        [Visible(false)]
        public String ModifiedByName{ get; set; }
        [Visible(false)]
        public DateTime ModifiedTs { get; set; }
    }
}