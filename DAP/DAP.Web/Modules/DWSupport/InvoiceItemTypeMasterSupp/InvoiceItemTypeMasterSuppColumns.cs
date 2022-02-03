
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.InvoiceItemTypeMasterSupp")]
    [BasedOnRow(typeof(Entities.InvoiceItemTypeMasterSuppRow), CheckNames = true)]
    public class InvoiceItemTypeMasterSuppColumns
    {
        [EditLink]
        public String InvoiceItemTypeCd { get; set; }
        [EditLink]
        public String InvoiceItemSubTypeCd { get; set; }
        [EditLink]
        public String InvoiceItemSubType2Cd { get; set; }
        [EditLink]
        public String InvoiceItemSubType3Cd { get; set; }
        [EditLink]
        public String InvoiceItemSourceCd { get; set; }
        [EditLink]
        public String MasterComponentCd { get; set; }
        public String CommentsTxt { get; set; }
        public DateTime CreatedTs { get; set; }
        public String CreatedByNam { get; set; }
        public String ModifiedByNam { get; set; }
        public DateTime ModifiedTs { get; set; }
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 InvoiceItemTypeMasterId { get; set; }
    }
}