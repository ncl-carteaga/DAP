namespace DAP.DWSupport {
    export interface DimCruiseFlagsForm {
        RevenueMgmtMarketSegment: Serenity.StringEditor;
        FinancialSuppressInd: Serenity.StringEditor;
        CruiseCd: Serenity.StringEditor;
        CruiseSegmentCd: Serenity.StringEditor;
        ShipCd: Serenity.StringEditor;
        CompanyCd: Serenity.StringEditor;
        CappedCapacity: Serenity.IntegerEditor;
        OnbrdAvgPaxQty: Serenity.IntegerEditor;
        HighlightInd: SelectYNEditor;
        ColorInd: SelectYNEditor;
        DrydockInd: SelectYNEditor;
        VarToCurve: Serenity.DecimalEditor;
        ShowInDr001: SelectYNEditor;
        ShowInDr010: SelectYNEditor;
        ShowInCube: SelectYNEditor;
        IntlDatelineInd: SelectYNEditor;
        MinisegInd: SelectYNEditor;
        EffectiveFrom: Serenity.DateEditor;
        EffectiveTo: Serenity.DateEditor;
        LoadDt: Serenity.DateEditor;
    }

    export class DimCruiseFlagsForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.DimCruiseFlags';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DimCruiseFlagsForm.init)  {
                DimCruiseFlagsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = SelectYNEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.DateEditor;

                Q.initFormType(DimCruiseFlagsForm, [
                    'RevenueMgmtMarketSegment', w0,
                    'FinancialSuppressInd', w0,
                    'CruiseCd', w0,
                    'CruiseSegmentCd', w0,
                    'ShipCd', w0,
                    'CompanyCd', w0,
                    'CappedCapacity', w1,
                    'OnbrdAvgPaxQty', w1,
                    'HighlightInd', w2,
                    'ColorInd', w2,
                    'DrydockInd', w2,
                    'VarToCurve', w3,
                    'ShowInDr001', w2,
                    'ShowInDr010', w2,
                    'ShowInCube', w2,
                    'IntlDatelineInd', w2,
                    'MinisegInd', w2,
                    'EffectiveFrom', w4,
                    'EffectiveTo', w4,
                    'LoadDt', w4
                ]);
            }
        }
    }
}

