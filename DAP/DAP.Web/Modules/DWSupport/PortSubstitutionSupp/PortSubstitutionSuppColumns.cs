
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.PortSubstitutionSupp")]
    [BasedOnRow(typeof(Entities.PortSubstitutionSuppRow), CheckNames = true)]
    public class PortSubstitutionSuppColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 PortSubstitutonSurKey { get; set; }
        [EditLink]
        public String PortCd { get; set; }
        [EditLink]
        public String PortNam { get; set; }
        public String PortSubstitutonNam { get; set; }
        public String CommentTxt { get; set; }
        public DateTime CreatedTs { get; set; }
        public String CreatedByNam { get; set; }
        public String ModifiedByNam { get; set; }
        
        public DateTime ModifiedTs { get; set; }
    }
}