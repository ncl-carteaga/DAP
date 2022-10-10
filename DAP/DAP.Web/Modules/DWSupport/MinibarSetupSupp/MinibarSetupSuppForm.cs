
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.MinibarSetupSupp")]
    [BasedOnRow(typeof(Entities.MinibarSetupSuppRow), CheckNames = true)]
    public class MinibarSetupSuppForm
    {
        public String ShipCd { get; set; }
        public DateTime EffectiveDat { get; set; }
        public Double MinibarSetupCostAmt { get; set; }
        public String CommentTxt { get; set; }
        [Visible(false)]
        public String CreatedByNam { get; set; }
        [Visible(false)]
        public DateTime CreatedTs { get; set; }
        [Visible(false)]
        public String ModifiedByNam { get; set; }
        [Visible(false)]
        public DateTime ModifiedTs { get; set; }
    }
}