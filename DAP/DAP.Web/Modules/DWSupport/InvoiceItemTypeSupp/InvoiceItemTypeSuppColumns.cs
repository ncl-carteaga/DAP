
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.InvoiceItemTypeSupp")]
    [BasedOnRow(typeof(Entities.InvoiceItemTypeSuppRow), CheckNames = true)]
    public class InvoiceItemTypeSuppColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Decimal InvoiceItemTypeGenNatKey { get; set; }
        [EditLink]
        public String ComponentCd { get; set; }
        public String InvoiceItemSourceCd { get; set; }
        public String InvoiceItemTypeCd { get; set; }
        public String InvoiceItemSubTypeCd { get; set; }
        public String InvoiceItemSubType2Cd { get; set; }
        public String InvoiceItemSubType3Cd { get; set; }
        public String InvoiceClassType1Cd { get; set; }
        public String InvoiceClassType2Cd { get; set; }
        public String InvoiceClassType3Cd { get; set; }
        public String InvoiceClassType4Cd { get; set; }

        
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
        public DateTime CreatedTs { get; set; }
        public String CreatedByNam { get; set; }
        public String ModifiedByNam { get; set; }
        public DateTime ModifiedTs { get; set; }
        public String IsAcctgActualCd { get; set; }
        public String CasinoComponentCd { get; set; }
        public String CasinoComponentDesc { get; set; }
        public String DeptShortDesc { get; set; }
        public String IsSuppressBuiltCd { get; set; }
    }
}