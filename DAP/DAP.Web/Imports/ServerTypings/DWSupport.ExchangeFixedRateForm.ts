
namespace DAP.DWSupport {
    export class ExchangeFixedRateForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.ExchangeFixedRate';
    }

    export interface ExchangeFixedRateForm {
        CurrencyCd: Serenity.StringEditor;
        ExchangeRate: Serenity.DecimalEditor;
        EffectiveFrom: Serenity.DateEditor;
        EffectiveTo: Serenity.DateEditor;
        LoadDt: Serenity.DateEditor;
    }

    [,
        ['CurrencyCd', () => Serenity.StringEditor],
        ['ExchangeRate', () => Serenity.DecimalEditor],
        ['EffectiveFrom', () => Serenity.DateEditor],
        ['EffectiveTo', () => Serenity.DateEditor],
        ['LoadDt', () => Serenity.DateEditor]
    ].forEach(x => Object.defineProperty(ExchangeFixedRateForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}