namespace DAP.DWSupport {
    export interface ExchangeFixedRateForm {
        CurrencyCd: Serenity.StringEditor;
        ExchangeRate: Serenity.DecimalEditor;
        EffectiveFrom: Serenity.DateEditor;
        EffectiveTo: Serenity.DateEditor;
        LoadDt: Serenity.DateEditor;
    }

    export class ExchangeFixedRateForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.ExchangeFixedRate';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ExchangeFixedRateForm.init)  {
                ExchangeFixedRateForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.DateEditor;

                Q.initFormType(ExchangeFixedRateForm, [
                    'CurrencyCd', w0,
                    'ExchangeRate', w1,
                    'EffectiveFrom', w2,
                    'EffectiveTo', w2,
                    'LoadDt', w2
                ]);
            }
        }
    }
}

