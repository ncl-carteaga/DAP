
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.RegionMasterSupp")]
    [BasedOnRow(typeof(Entities.RegionMasterSuppRow), CheckNames = true)]
    public class RegionMasterSuppColumns
    {
        public Int32 Id { get; set; }
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 RegionSurKey { get; set; }
        [EditLink]
        public String RegionCd { get; set; }
        public String ResponsibilityDesc { get; set; }
        public String SalesrepUserId { get; set; }
        public String CreatedByNam { get; set; }
        public String CreatedTs { get; set; }
        public String ModifiedByNam { get; set; }
        public String ModifiedTs { get; set; }
    }
}