namespace DAP.DWSupport {
    export interface CruiseSegmentDaysOverrideForm {
        CruiseCd: Serenity.StringEditor;
        CompanyCd: Serenity.StringEditor;
        CruiseDaysQty: Serenity.IntegerEditor;
        CruiseSegmentDaysQty: Serenity.IntegerEditor;
        EffectiveFrom: Serenity.DateEditor;
        EffectiveTo: Serenity.DateEditor;
        LoadDt: Serenity.DateEditor;
    }

    export class CruiseSegmentDaysOverrideForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.CruiseSegmentDaysOverride';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CruiseSegmentDaysOverrideForm.init)  {
                CruiseSegmentDaysOverrideForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(CruiseSegmentDaysOverrideForm, [
                    'CruiseCd', w0,
                    'CompanyCd', w0,
                    'CruiseDaysQty', w1,
                    'CruiseSegmentDaysQty', w1,
                    'EffectiveFrom', w2,
                    'EffectiveTo', w2,
                    'LoadDt', w2
                ]);
            }
        }
    }
}

