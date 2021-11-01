
namespace DAP.PCHDW.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PCHDW.DimCruise")]
    [BasedOnRow(typeof(Entities.DimCruiseRow), CheckNames = true)]
    public class DimCruiseColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CruiseTk { get; set; }
        [EditLink]
        public String CruiseCd { get; set; }
        public String CruiseSegmentCd { get; set; }
        public String CruiseName { get; set; }
        public String LocationName { get; set; }
        public String SeasonName { get; set; }
        public String RouteName { get; set; }
        public String MarketName { get; set; }
        public Int32 CruiseDaysQty { get; set; }
        public DateTime CruiseFromDt { get; set; }
        public DateTime CruiseToDt { get; set; }
        public Int32 CruiseSegmentDaysQty { get; set; }
        public DateTime CruiseSegmentFromDt { get; set; }
        public DateTime CruiseSegmentToDt { get; set; }
        public Boolean IrsTaxInd { get; set; }
        public Decimal IrsTaxAmt { get; set; }
        public Boolean IufExemptFeeInd { get; set; }
        public Int32 IufExemptQty { get; set; }
        public Decimal IufExemptFeeAmt { get; set; }
        public Boolean IufNonexemptFeeInd { get; set; }
        public Int32 IufNonexemptQty { get; set; }
        public Decimal IufNonexemptFeeAmt { get; set; }
        public Boolean PpfExemptInd { get; set; }
        public Decimal PpfExemptFeeAmt { get; set; }
        public Boolean PpfNonexemptInd { get; set; }
        public Decimal PpfNonexemptFeeAmt { get; set; }
        public Boolean HmfFeeInd { get; set; }
        public Decimal HmfPct { get; set; }
        public Boolean CpvTaxInd { get; set; }
        public Decimal CpvTaxAmt { get; set; }
        public String CruiseSailingStatusDesc { get; set; }
        public String FromPortCd { get; set; }
        public String ToPortCd { get; set; }
        public String FromPortName { get; set; }
        public String ToPortName { get; set; }
        public String SegmentFromPortCd { get; set; }
        public String SegmentToPortCd { get; set; }
        public String SegmentFromPortName { get; set; }
        public String SegmentToPortName { get; set; }
        public String SuperMarketCd { get; set; }
        public String SuperMarketDesc { get; set; }
        public String CruiseSegmentName { get; set; }
        public String SegmentLocationName { get; set; }
        public String SegmentSeasonName { get; set; }
        public String SegmentRouteName { get; set; }
        public String SegmentMarketName { get; set; }
        public String SegmentSuperMarketCd { get; set; }
        public String SegmentSuperMarketDesc { get; set; }
        public String CharterInd { get; set; }
        public String CompanyCd { get; set; }
        public Int32 StatedCapacity { get; set; }
        public Int32 CappedCapacity { get; set; }
        public String CruiseStatusCd { get; set; }
        public String ShipCd { get; set; }
        public String ShowInReport { get; set; }
        public String CruiseFromDtMmddyyyy { get; set; }
        public String CruiseToDtMmddyyyy { get; set; }
        public String SegmentFromDtMmddyyyy { get; set; }
        public String SegmentToDtMmddyyyy { get; set; }
        public String MinisegInd { get; set; }
        public String OnboardAcctTrandate { get; set; }
        public String SegmentOnboardAcctTrandate { get; set; }
        public Int32 OnbrdAvgPaxQty { get; set; }
        public Int32 HighlightInd { get; set; }
        public String ColorInd { get; set; }
        public Int32 DrydockInd { get; set; }
        public Int16 AmenityPointsAllowedQty { get; set; }
        public Double VarToCurve { get; set; }
        public String RevenueMgmtMarketSegment { get; set; }
        public String FinancialSuppressInd { get; set; }
    }
}