
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.DistrictMasterSupp")]
    [BasedOnRow(typeof(Entities.DistrictMasterSuppRow), CheckNames = true)]
    public class DistrictMasterSuppColumns
    {
        [EditLink, AlignRight]
        public Decimal DistrictSurKey { get; set; }
        [EditLink]
        public String DistrictNbr { get; set; }
        public String SalesrepUserId { get; set; }
        public String GroupCd { get; set; }
        public String SalesChannelCd { get; set; }
        public String RmChannelCd { get; set; }
        public String AreaCd { get; set; }
        public String PrimaryCrmSupportNam { get; set; }
        public String SecondaryCrmSupportNam { get; set; }
        public String GssChannelCd { get; set; }
        public DateTime CreatedTs { get; set; }
        public String CreatedByNam { get; set; }
        public String ModifiedByNam { get; set; }
        public DateTime ModifiedTs { get; set; }
        public String ChannelCd { get; set; }
    }
}