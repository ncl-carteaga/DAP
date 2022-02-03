namespace DAP.PCHDW {
    export interface DimCruiseRow {
        CruiseTk?: number;
        CruiseCd?: string;
        CruiseSegmentCd?: string;
        CruiseName?: string;
        LocationName?: string;
        SeasonName?: string;
        RouteName?: string;
        MarketName?: string;
        CruiseDaysQty?: number;
        CruiseFromDt?: string;
        CruiseToDt?: string;
        CruiseSegmentDaysQty?: number;
        CruiseSegmentFromDt?: string;
        CruiseSegmentToDt?: string;
        IrsTaxInd?: boolean;
        IrsTaxAmt?: number;
        IufExemptFeeInd?: boolean;
        IufExemptQty?: number;
        IufExemptFeeAmt?: number;
        IufNonexemptFeeInd?: boolean;
        IufNonexemptQty?: number;
        IufNonexemptFeeAmt?: number;
        PpfExemptInd?: boolean;
        PpfExemptFeeAmt?: number;
        PpfNonexemptInd?: boolean;
        PpfNonexemptFeeAmt?: number;
        HmfFeeInd?: boolean;
        HmfPct?: number;
        CpvTaxInd?: boolean;
        CpvTaxAmt?: number;
        CruiseSailingStatusDesc?: string;
        FromPortCd?: string;
        ToPortCd?: string;
        FromPortName?: string;
        ToPortName?: string;
        SegmentFromPortCd?: string;
        SegmentToPortCd?: string;
        SegmentFromPortName?: string;
        SegmentToPortName?: string;
        SuperMarketCd?: string;
        SuperMarketDesc?: string;
        CruiseSegmentName?: string;
        SegmentLocationName?: string;
        SegmentSeasonName?: string;
        SegmentRouteName?: string;
        SegmentMarketName?: string;
        SegmentSuperMarketCd?: string;
        SegmentSuperMarketDesc?: string;
        CharterInd?: string;
        CompanyCd?: string;
        StatedCapacity?: number;
        CappedCapacity?: number;
        CruiseStatusCd?: string;
        ShipCd?: string;
        ShowInReport?: string;
        CruiseFromDtMmddyyyy?: string;
        CruiseToDtMmddyyyy?: string;
        SegmentFromDtMmddyyyy?: string;
        SegmentToDtMmddyyyy?: string;
        MinisegInd?: string;
        OnboardAcctTrandate?: string;
        SegmentOnboardAcctTrandate?: string;
        OnbrdAvgPaxQty?: number;
        HighlightInd?: number;
        ColorInd?: string;
        DrydockInd?: number;
        AmenityPointsAllowedQty?: number;
        VarToCurve?: number;
        RevenueMgmtMarketSegment?: string;
        FinancialSuppressInd?: string;
    }

    export namespace DimCruiseRow {
        export const idProperty = 'CruiseTk';
        export const nameProperty = 'CruiseCd';
        export const localTextPrefix = 'PCHDW.DimCruise';
        export const lookupKey = 'PCHDW.GetDimCruise';

        export function getLookup(): Q.Lookup<DimCruiseRow> {
            return Q.getLookup<DimCruiseRow>('PCHDW.GetDimCruise');
        }

        export declare const enum Fields {
            CruiseTk = "CruiseTk",
            CruiseCd = "CruiseCd",
            CruiseSegmentCd = "CruiseSegmentCd",
            CruiseName = "CruiseName",
            LocationName = "LocationName",
            SeasonName = "SeasonName",
            RouteName = "RouteName",
            MarketName = "MarketName",
            CruiseDaysQty = "CruiseDaysQty",
            CruiseFromDt = "CruiseFromDt",
            CruiseToDt = "CruiseToDt",
            CruiseSegmentDaysQty = "CruiseSegmentDaysQty",
            CruiseSegmentFromDt = "CruiseSegmentFromDt",
            CruiseSegmentToDt = "CruiseSegmentToDt",
            IrsTaxInd = "IrsTaxInd",
            IrsTaxAmt = "IrsTaxAmt",
            IufExemptFeeInd = "IufExemptFeeInd",
            IufExemptQty = "IufExemptQty",
            IufExemptFeeAmt = "IufExemptFeeAmt",
            IufNonexemptFeeInd = "IufNonexemptFeeInd",
            IufNonexemptQty = "IufNonexemptQty",
            IufNonexemptFeeAmt = "IufNonexemptFeeAmt",
            PpfExemptInd = "PpfExemptInd",
            PpfExemptFeeAmt = "PpfExemptFeeAmt",
            PpfNonexemptInd = "PpfNonexemptInd",
            PpfNonexemptFeeAmt = "PpfNonexemptFeeAmt",
            HmfFeeInd = "HmfFeeInd",
            HmfPct = "HmfPct",
            CpvTaxInd = "CpvTaxInd",
            CpvTaxAmt = "CpvTaxAmt",
            CruiseSailingStatusDesc = "CruiseSailingStatusDesc",
            FromPortCd = "FromPortCd",
            ToPortCd = "ToPortCd",
            FromPortName = "FromPortName",
            ToPortName = "ToPortName",
            SegmentFromPortCd = "SegmentFromPortCd",
            SegmentToPortCd = "SegmentToPortCd",
            SegmentFromPortName = "SegmentFromPortName",
            SegmentToPortName = "SegmentToPortName",
            SuperMarketCd = "SuperMarketCd",
            SuperMarketDesc = "SuperMarketDesc",
            CruiseSegmentName = "CruiseSegmentName",
            SegmentLocationName = "SegmentLocationName",
            SegmentSeasonName = "SegmentSeasonName",
            SegmentRouteName = "SegmentRouteName",
            SegmentMarketName = "SegmentMarketName",
            SegmentSuperMarketCd = "SegmentSuperMarketCd",
            SegmentSuperMarketDesc = "SegmentSuperMarketDesc",
            CharterInd = "CharterInd",
            CompanyCd = "CompanyCd",
            StatedCapacity = "StatedCapacity",
            CappedCapacity = "CappedCapacity",
            CruiseStatusCd = "CruiseStatusCd",
            ShipCd = "ShipCd",
            ShowInReport = "ShowInReport",
            CruiseFromDtMmddyyyy = "CruiseFromDtMmddyyyy",
            CruiseToDtMmddyyyy = "CruiseToDtMmddyyyy",
            SegmentFromDtMmddyyyy = "SegmentFromDtMmddyyyy",
            SegmentToDtMmddyyyy = "SegmentToDtMmddyyyy",
            MinisegInd = "MinisegInd",
            OnboardAcctTrandate = "OnboardAcctTrandate",
            SegmentOnboardAcctTrandate = "SegmentOnboardAcctTrandate",
            OnbrdAvgPaxQty = "OnbrdAvgPaxQty",
            HighlightInd = "HighlightInd",
            ColorInd = "ColorInd",
            DrydockInd = "DrydockInd",
            AmenityPointsAllowedQty = "AmenityPointsAllowedQty",
            VarToCurve = "VarToCurve",
            RevenueMgmtMarketSegment = "RevenueMgmtMarketSegment",
            FinancialSuppressInd = "FinancialSuppressInd"
        }
    }
}

