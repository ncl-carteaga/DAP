
namespace DAP.DWSupport.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DWSupport.AmenitiesSupp")]
    [BasedOnRow(typeof(Entities.AmenitiesSuppRow), CheckNames = true)]
    public class AmenitiesSuppForm
    {
        public String AmenityCd { get; set; }
        public Int64 AmenityTypeId { get; set; }
        public String AmenityDesc { get; set; }
        public String AmenityCategoryCd { get; set; }
        [HalfWidth(UntilNext = true)]
        public Int32 DisplayOrderCd { get; set; }
        public Decimal AmenityCostAmt { get; set; }
        public Decimal AmenityAddonAmt { get; set; }
        public String IsPerDiemCd { get; set; }
        public String CurrencyCd { get; set; }
        [FullWidth, TextAreaEditor(Rows = 3)]
        public String ConditionDesc { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String CommentTxt { get; set; }
        [Visible(false)]
        public DateTime CreatedDat { get; set; }
        [Visible(false)]
        public String CreatedByNam { get; set; }
        [Visible(false)]
        public DateTime ModifiedDat { get; set; }
        [Visible(false)]
        public String ModifiedByNam { get; set; }
    }
}