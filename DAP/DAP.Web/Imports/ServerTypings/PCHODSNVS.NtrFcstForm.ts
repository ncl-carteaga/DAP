
namespace DAP.PCHODSNVS {
    export class NtrFcstForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODSNVS.NtrFcst';
    }

    export interface NtrFcstForm {
        CompanyCd: Serenity.StringEditor;
        AccountPeriodNum: Serenity.StringEditor;
        NtrFcst: Serenity.DecimalEditor;
        PdsFcstTotal: Serenity.DecimalEditor;
        ApcdFinal: Serenity.DecimalEditor;
        NtrFinancialBudget: Serenity.DecimalEditor;
    }

    [
        ['CompanyCd', () => Serenity.StringEditor],
        ['AccountPeriodNum', () => Serenity.StringEditor],
        ['NtrFcst', () => Serenity.DecimalEditor],
        ['PdsFcstTotal', () => Serenity.DecimalEditor],
        ['ApcdFinal', () => Serenity.DecimalEditor],
        ['NtrFinancialBudget', () => Serenity.DecimalEditor]
    ].forEach(x => Object.defineProperty(NtrFcstForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}