
namespace DAP.PCHODSNVS {
    export class NtrBudgetForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODSNVS.NtrBudget';
    }

    export interface NtrBudgetForm {
        CompanyCd: Serenity.StringEditor;
        AccountPeriodNum: Serenity.StringEditor;
        NtrBudget: Serenity.DecimalEditor;
        PdsBudgetTotal: Serenity.DecimalEditor;
        ApcdFinal: Serenity.DecimalEditor;
        NtrFinancialBudget: Serenity.DecimalEditor;
    }

    [
        ['CompanyCd', () => Serenity.StringEditor],
        ['AccountPeriodNum', () => Serenity.StringEditor],
        ['NtrBudget', () => Serenity.DecimalEditor],
        ['PdsBudgetTotal', () => Serenity.DecimalEditor],
        ['ApcdFinal', () => Serenity.DecimalEditor],
        ['NtrFinancialBudget', () => Serenity.DecimalEditor]
    ].forEach(x => Object.defineProperty(NtrBudgetForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}