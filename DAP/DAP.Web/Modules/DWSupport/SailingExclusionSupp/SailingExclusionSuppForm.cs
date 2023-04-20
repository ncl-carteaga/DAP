
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.SailingExclusionSupp")]
    [BasedOnRow(typeof(Entities.SailingExclusionSuppRow), CheckNames = true)]
    public class SailingExclusionSuppForm
    {
        public String ShipCd { get; set; }
        public Int32 MainSailId { get; set; }
        public DateTime MainSailDt { get; set; }
        public String MainVoyageCd { get; set; }
        public DateTime FromDataAsOfDt { get; set; }
        public DateTime ToDataAsOfDt { get; set; }
        public String CommentTxt { get; set; }
        [Visible(false)]
        public DateTime CreatedTs { get; set; }
        [Visible(false)]
        public String CreatedByNam { get; set; }
        [Visible(false)]
        public DateTime ModifiedTs { get; set; }
        [Visible(false)]
        public String ModifiedByNam { get; set; }
    }
}