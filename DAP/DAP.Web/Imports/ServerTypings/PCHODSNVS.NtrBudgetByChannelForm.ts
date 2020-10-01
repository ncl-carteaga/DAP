
namespace DAP.PCHODSNVS {
    export class NtrBudgetByChannelForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODSNVS.NtrBudgetByChannel';
    }

    export interface NtrBudgetByChannelForm {
        CompanyCd: Serenity.StringEditor;
        AccountingYear: Serenity.IntegerEditor;
        ChannelSummDesc: Serenity.StringEditor;
        ChannelDesc: Serenity.StringEditor;
        NtrBudget: Serenity.DecimalEditor;
        PdsBudgetTotal: Serenity.DecimalEditor;
        NpdBudget: Serenity.DecimalEditor;
    }

    [
        ['CompanyCd', () => Serenity.StringEditor],
        ['AccountingYear', () => Serenity.IntegerEditor],
        ['ChannelSummDesc', () => Serenity.StringEditor],
        ['ChannelDesc', () => Serenity.StringEditor],
        ['NtrBudget', () => Serenity.DecimalEditor],
        ['PdsBudgetTotal', () => Serenity.DecimalEditor],
        ['NpdBudget', () => Serenity.DecimalEditor]
    ].forEach(x => Object.defineProperty(NtrBudgetByChannelForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}