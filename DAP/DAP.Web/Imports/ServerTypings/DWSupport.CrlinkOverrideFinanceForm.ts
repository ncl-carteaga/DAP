namespace DAP.DWSupport {
    export interface CrlinkOverrideFinanceForm {
        CruiseCd: Serenity.StringEditor;
        CruiseSegmentCd: Serenity.StringEditor;
        CompanyCd: Serenity.StringEditor;
        EffectiveFrom: Serenity.DateEditor;
        EffectiveTo: Serenity.DateEditor;
        LoadDt: Serenity.DateEditor;
    }

    export class CrlinkOverrideFinanceForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.CrlinkOverrideFinance';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CrlinkOverrideFinanceForm.init)  {
                CrlinkOverrideFinanceForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;

                Q.initFormType(CrlinkOverrideFinanceForm, [
                    'CruiseCd', w0,
                    'CruiseSegmentCd', w0,
                    'CompanyCd', w0,
                    'EffectiveFrom', w1,
                    'EffectiveTo', w1,
                    'LoadDt', w1
                ]);
            }
        }
    }
}

