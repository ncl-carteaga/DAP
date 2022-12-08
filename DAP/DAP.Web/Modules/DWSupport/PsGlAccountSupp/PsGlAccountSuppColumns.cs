
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.PsGlAccountSupp")]
    [BasedOnRow(typeof(Entities.PsGlAccountSuppRow), CheckNames = true)]
    public class PsGlAccountSuppColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 AccountSurKey { get; set; }
        [EditLink]
        public String SetId { get; set; }
        public String AccountId { get; set; }
        public String OlapAccountDesc { get; set; }
        public String GrossCostCd { get; set; }
        public String AccountClassType1Cd { get; set; }
        public String AccountClassType2Cd { get; set; }
        public String AccountClassType3Cd { get; set; }
        public String AccountClassType4Cd { get; set; }
        public DateTime CreatedTs { get; set; }
        public String CreatedByNam { get; set; }
        public String ModifiedByNam { get; set; }
        public DateTime ModifiedTs { get; set; }
    }
}