
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.InvoiceItemTypeMasterSupp")]
    [BasedOnRow(typeof(Entities.InvoiceItemTypeMasterSuppRow), CheckNames = true)]
    public class InvoiceItemTypeMasterSuppForm
    {
        public String MasterComponentCd { get; set; }
        public String InvoiceItemSourceCd { get; set; }
        public String InvoiceItemTypeCd { get; set; }
        public String InvoiceItemSubTypeCd { get; set; }
        public String InvoiceItemSubType2Cd { get; set; }
        public String InvoiceItemSubType3Cd { get; set; }
        public String CommentsTxt { get; set; }
        public DateTime CreatedTs { get; set; }
        public String CreatedByNam { get; set; }
        public String ModifiedByNam { get; set; }
        public DateTime ModifiedTs { get; set; }
    }
}