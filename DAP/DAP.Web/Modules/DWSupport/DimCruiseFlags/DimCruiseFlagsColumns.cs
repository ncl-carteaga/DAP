
namespace DAP.DWSupport.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DWSupport.DimCruiseFlags")]
    [BasedOnRow(typeof(Entities.DimCruiseFlagsRow), CheckNames = true)]
    public class DimCruiseFlagsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 DimCruiseFlagId { get; set; }
        [EditLink]
        public String CruiseCd { get; set; }
        public String RevenueMgmtMarketSegment { get; set; }
        public String FinancialSuppressInd { get; set; }
        public String CruiseSegmentCd { get; set; }
        public String ShipCd { get; set; }
        public String CompanyCd { get; set; }
        public Int32 CappedCapacity { get; set; }
        public Int32 OnbrdAvgPaxQty { get; set; }
        public Int32 HighlightInd { get; set; }
        public String ColorInd { get; set; }
        public Int32 DrydockInd { get; set; }
        public Double VarToCurve { get; set; }
        public String ShowInDr001 { get; set; }
        public String ShowInDr010 { get; set; }
        public String ShowInCube { get; set; }
        public String IntlDatelineInd { get; set; }
        public String MinisegInd { get; set; }
        public DateTime EffectiveFrom { get; set; }
        public DateTime EffectiveTo { get; set; }
        public DateTime LoadDt { get; set; }
    }
}