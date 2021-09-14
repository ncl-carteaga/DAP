namespace DAP.PCHDW {
    export interface DimCruiseForm {
        CruiseCd: Serenity.StringEditor;
        CruiseSegmentCd: Serenity.StringEditor;
        CruiseName: Serenity.StringEditor;
        LocationName: Serenity.StringEditor;
        SeasonName: Serenity.StringEditor;
        RouteName: Serenity.StringEditor;
        MarketName: Serenity.StringEditor;
        CruiseDaysQty: Serenity.IntegerEditor;
        CruiseFromDt: Serenity.DateEditor;
        CruiseToDt: Serenity.DateEditor;
        CruiseSegmentDaysQty: Serenity.IntegerEditor;
        CruiseSegmentFromDt: Serenity.DateEditor;
        CruiseSegmentToDt: Serenity.DateEditor;
        IrsTaxInd: Serenity.BooleanEditor;
        IrsTaxAmt: Serenity.DecimalEditor;
        IufExemptFeeInd: Serenity.BooleanEditor;
        IufExemptQty: Serenity.IntegerEditor;
        IufExemptFeeAmt: Serenity.DecimalEditor;
        IufNonexemptFeeInd: Serenity.BooleanEditor;
        IufNonexemptQty: Serenity.IntegerEditor;
        IufNonexemptFeeAmt: Serenity.DecimalEditor;
        PpfExemptInd: Serenity.BooleanEditor;
        PpfExemptFeeAmt: Serenity.DecimalEditor;
        PpfNonexemptInd: Serenity.BooleanEditor;
        PpfNonexemptFeeAmt: Serenity.DecimalEditor;
        HmfFeeInd: Serenity.BooleanEditor;
        HmfPct: Serenity.DecimalEditor;
        CpvTaxInd: Serenity.BooleanEditor;
        CpvTaxAmt: Serenity.DecimalEditor;
        CruiseSailingStatusDesc: Serenity.StringEditor;
        CharterInd: Serenity.StringEditor;
        StatedCapacity: Serenity.IntegerEditor;
        CappedCapacity: Serenity.IntegerEditor;
        CruiseStatusCd: Serenity.StringEditor;
        MinisegInd: Serenity.StringEditor;
        OnbrdAvgPaxQty: Serenity.IntegerEditor;
        HighlightInd: Serenity.IntegerEditor;
        ColorInd: Serenity.StringEditor;
        DrydockInd: Serenity.IntegerEditor;
        AmenityPointsAllowedQty: Serenity.IntegerEditor;
        VarToCurve: Serenity.DecimalEditor;
        FinancialSuppressInd: Serenity.StringEditor;
        FromPortCd: Serenity.StringEditor;
        ToPortCd: Serenity.StringEditor;
        FromPortName: Serenity.StringEditor;
        ToPortName: Serenity.StringEditor;
        SegmentFromPortCd: Serenity.StringEditor;
        SegmentToPortCd: Serenity.StringEditor;
        SegmentFromPortName: Serenity.StringEditor;
        SegmentToPortName: Serenity.StringEditor;
        SuperMarketCd: Serenity.StringEditor;
        SuperMarketDesc: Serenity.StringEditor;
        CruiseSegmentName: Serenity.StringEditor;
        SegmentLocationName: Serenity.StringEditor;
        SegmentSeasonName: Serenity.StringEditor;
        SegmentRouteName: Serenity.StringEditor;
        SegmentMarketName: Serenity.StringEditor;
        SegmentSuperMarketCd: Serenity.StringEditor;
        SegmentSuperMarketDesc: Serenity.StringEditor;
        CompanyCd: Serenity.StringEditor;
        ShipCd: Serenity.StringEditor;
        ShowInReport: Serenity.StringEditor;
        CruiseFromDtMmddyyyy: Serenity.StringEditor;
        CruiseToDtMmddyyyy: Serenity.StringEditor;
        SegmentFromDtMmddyyyy: Serenity.StringEditor;
        SegmentToDtMmddyyyy: Serenity.StringEditor;
        OnboardAcctTrandate: Serenity.StringEditor;
        SegmentOnboardAcctTrandate: Serenity.StringEditor;
        RevenueMgmtMarketSegment: Serenity.StringEditor;
    }

    export class DimCruiseForm extends Serenity.PrefixedContext {
        static formKey = 'PCHDW.DimCruise';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DimCruiseForm.init)  {
                DimCruiseForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;
                var w3 = s.BooleanEditor;
                var w4 = s.DecimalEditor;

                Q.initFormType(DimCruiseForm, [
                    'CruiseCd', w0,
                    'CruiseSegmentCd', w0,
                    'CruiseName', w0,
                    'LocationName', w0,
                    'SeasonName', w0,
                    'RouteName', w0,
                    'MarketName', w0,
                    'CruiseDaysQty', w1,
                    'CruiseFromDt', w2,
                    'CruiseToDt', w2,
                    'CruiseSegmentDaysQty', w1,
                    'CruiseSegmentFromDt', w2,
                    'CruiseSegmentToDt', w2,
                    'IrsTaxInd', w3,
                    'IrsTaxAmt', w4,
                    'IufExemptFeeInd', w3,
                    'IufExemptQty', w1,
                    'IufExemptFeeAmt', w4,
                    'IufNonexemptFeeInd', w3,
                    'IufNonexemptQty', w1,
                    'IufNonexemptFeeAmt', w4,
                    'PpfExemptInd', w3,
                    'PpfExemptFeeAmt', w4,
                    'PpfNonexemptInd', w3,
                    'PpfNonexemptFeeAmt', w4,
                    'HmfFeeInd', w3,
                    'HmfPct', w4,
                    'CpvTaxInd', w3,
                    'CpvTaxAmt', w4,
                    'CruiseSailingStatusDesc', w0,
                    'CharterInd', w0,
                    'StatedCapacity', w1,
                    'CappedCapacity', w1,
                    'CruiseStatusCd', w0,
                    'MinisegInd', w0,
                    'OnbrdAvgPaxQty', w1,
                    'HighlightInd', w1,
                    'ColorInd', w0,
                    'DrydockInd', w1,
                    'AmenityPointsAllowedQty', w1,
                    'VarToCurve', w4,
                    'FinancialSuppressInd', w0,
                    'FromPortCd', w0,
                    'ToPortCd', w0,
                    'FromPortName', w0,
                    'ToPortName', w0,
                    'SegmentFromPortCd', w0,
                    'SegmentToPortCd', w0,
                    'SegmentFromPortName', w0,
                    'SegmentToPortName', w0,
                    'SuperMarketCd', w0,
                    'SuperMarketDesc', w0,
                    'CruiseSegmentName', w0,
                    'SegmentLocationName', w0,
                    'SegmentSeasonName', w0,
                    'SegmentRouteName', w0,
                    'SegmentMarketName', w0,
                    'SegmentSuperMarketCd', w0,
                    'SegmentSuperMarketDesc', w0,
                    'CompanyCd', w0,
                    'ShipCd', w0,
                    'ShowInReport', w0,
                    'CruiseFromDtMmddyyyy', w0,
                    'CruiseToDtMmddyyyy', w0,
                    'SegmentFromDtMmddyyyy', w0,
                    'SegmentToDtMmddyyyy', w0,
                    'OnboardAcctTrandate', w0,
                    'SegmentOnboardAcctTrandate', w0,
                    'RevenueMgmtMarketSegment', w0
                ]);
            }
        }
    }
}

