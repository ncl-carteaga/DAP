
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.MinibarSetupSupp")]
    [BasedOnRow(typeof(Entities.MinibarSetupSuppRow), CheckNames = true)]
    public class MinibarSetupSuppColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int16 MinibarSetupSurKey { get; set; }
        [EditLink]
        public String ShipCd { get; set; }
        public DateTime EffectiveDat { get; set; }
        public Double MinibarSetupCostAmt { get; set; }
        public String CommentTxt { get; set; }
        public String CreatedByNam { get; set; }
        public DateTime CreatedTs { get; set; }
        public String ModifiedByNam { get; set; }
        public DateTime ModifiedTs { get; set; }
    }
}