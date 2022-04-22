
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.AmenitiesSupp")]
    [BasedOnRow(typeof(Entities.AmenitiesSuppRow), CheckNames = true)]
    public class AmenitiesSuppColumns
    {
        [EditLink, AlignRight]
        public Int64 AmenityId { get; set; }
        [EditLink]
        public String AmenityCd { get; set; }
        public Int64 AmenityTypeId { get; set; }
        public String AmenityTypeAmenityTypeCd { get; set; }
        public String AmenityDesc { get; set; }
        public String AmenityCategoryCd { get; set; }
        public Int32 DisplayOrderCd { get; set; }
        public String ConditionDesc { get; set; }
        public String CommentTxt { get; set; }
        public Decimal AmenityCostAmt { get; set; }
        public Decimal AmenityAddonAmt { get; set; }
        public String IsPerDiemCd { get; set; }
        public String CurrencyCd { get; set; }
        public DateTime CreatedDat { get; set; }
        public String CreatedByNam { get; set; }
        public DateTime ModifiedDat { get; set; }
        public String ModifiedByNam { get; set; }
    }
}