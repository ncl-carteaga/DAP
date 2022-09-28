
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.CasinoSlotMasterDescSupp")]
    [BasedOnRow(typeof(Entities.CasinoSlotMasterDescSuppRow), CheckNames = true)]
    public class CasinoSlotMasterDescSuppForm
    {
        public String SlotMasterDesc { get; set; }
        public String CommentTxt { get; set; }
        [Visible(false)]
        public DateTime CreatedTs { get; set; }
        [Visible(false)]
        public String CreatedByNam { get; set; }
        [Visible(false)]
        public String ModifiedByNam { get; set; }
        public String ManufacturerNam { get; set; }
        [Visible(false)]
        public DateTime ModifiedTs { get; set; }
    }
}