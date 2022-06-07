
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.InvoiceItemTypeSupp")]
    [BasedOnRow(typeof(Entities.InvoiceItemTypeSuppRow), CheckNames = true)]
    public class InvoiceItemTypeSuppForm
    {
        public String InvoiceClassType1Cd { get; set; }
        public String InvoiceClassType2Cd { get; set; }
        public String InvoiceClassType3Cd { get; set; }
        public String InvoiceClassType4Cd { get; set; }
        public String InvoiceItemSourceCd { get; set; }
        public String InvoiceItemTypeCd { get; set; }
        public String InvoiceItemSubTypeCd { get; set; }
        public String InvoiceItemSubType2Cd { get; set; }
        public String InvoiceItemSubType3Cd { get; set; }
        public String ComponentCd { get; set; }
        public String ComponentDesc { get; set; }
        public String ChartOfAccountNbr { get; set; }
        public String CommentsTxt { get; set; }
        public String IsNtrCd { get; set; }
        public String IsGtrCd { get; set; }
        public String IsDilutionCd { get; set; }
        public String IsCostCd { get; set; }
        public String IsTaxCd { get; set; }
        public String IsCcCostCd { get; set; }
        public String IsAcctgAdjCd { get; set; }
        public String IsPioCd { get; set; }
        public String IsGroupAmenityCd { get; set; }
        public Decimal AmenityCostAmt { get; set; }
        public String IsPerDiemCd { get; set; }
        [Visible(false)]
        public DateTime CreatedTs { get; set; }
        [Visible(false)]
        public String CreatedByNam { get; set; }
        [Visible(false)]
        public String ModifiedByNam { get; set; }
        [Visible(false)]
        public DateTime ModifiedTs { get; set; }
        public String IsAcctgActualCd { get; set; }
        public String CasinoComponentCd { get; set; }
        public String CasinoComponentDesc { get; set; }
        public String DeptShortDesc { get; set; }
        public String IsSuppressBuiltCd { get; set; }
    }
}