
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.CasinoSlotMasterDescSupp")]
    [BasedOnRow(typeof(Entities.CasinoSlotMasterDescSuppRow), CheckNames = true)]
    public class CasinoSlotMasterDescSuppColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SlotMasterDescSurKey { get; set; }
        public String SlotMasterDesc { get; set; }
        public String CommentTxt { get; set; }
        public DateTime CreatedTs { get; set; }
        public String CreatedByNam { get; set; }
        public String ModifiedByNam { get; set; }
        public String ManufacturerNam { get; set; }
        public DateTime ModifiedTs { get; set; }
    }
}