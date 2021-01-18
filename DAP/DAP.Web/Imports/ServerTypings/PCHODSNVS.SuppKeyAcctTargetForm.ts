
namespace DAP.PCHODSNVS {
    export class SuppKeyAcctTargetForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODSNVS.SuppKeyAcctTarget';
    }

    export interface SuppKeyAcctTargetForm {
        CompanyCd: Serenity.DecimalEditor;
        KeyAcctLink: Serenity.StringEditor;
        AccountType: Serenity.StringEditor;
        CcfTargetQ1: Serenity.DecimalEditor;
        CcfTargetQ12: Serenity.DecimalEditor;
        CcfTargetQ13: Serenity.DecimalEditor;
        CcfTargetQ14: Serenity.DecimalEditor;
        CcfTargetQ15: Serenity.DecimalEditor;
        CcfTargetQ2: Serenity.DecimalEditor;
        CcfTargetQ22: Serenity.DecimalEditor;
        CcfTargetQ23: Serenity.DecimalEditor;
        CcfTargetQ24: Serenity.DecimalEditor;
        CcfTargetQ25: Serenity.DecimalEditor;
        CcfTargetQ3: Serenity.DecimalEditor;
        CcfTargetQ32: Serenity.DecimalEditor;
        CcfTargetQ33: Serenity.DecimalEditor;
        CcfTargetQ34: Serenity.DecimalEditor;
        CcfTargetQ35: Serenity.DecimalEditor;
        CcfTargetQ4: Serenity.DecimalEditor;
        CcfTargetQ42: Serenity.DecimalEditor;
        CcfTargetQ43: Serenity.DecimalEditor;
        CcfTargetQ44: Serenity.DecimalEditor;
        CcfTargetQ45: Serenity.DecimalEditor;
        PrctTargetQ1: Serenity.DecimalEditor;
        PrctTargetQ12: Serenity.DecimalEditor;
        PrctTargetQ13: Serenity.DecimalEditor;
        PrctTargetQ14: Serenity.DecimalEditor;
        PrctTargetQ15: Serenity.DecimalEditor;
        PrctTargetQ2: Serenity.DecimalEditor;
        PrctTargetQ22: Serenity.DecimalEditor;
        PrctTargetQ23: Serenity.DecimalEditor;
        PrctTargetQ24: Serenity.DecimalEditor;
        PrctTargetQ25: Serenity.DecimalEditor;
        PrctTargetQ3: Serenity.DecimalEditor;
        PrctTargetQ32: Serenity.DecimalEditor;
        PrctTargetQ33: Serenity.DecimalEditor;
        PrctTargetQ34: Serenity.DecimalEditor;
        PrctTargetQ35: Serenity.DecimalEditor;
        PrctTargetQ4: Serenity.DecimalEditor;
        PrctTargetQ42: Serenity.DecimalEditor;
        PrctTargetQ43: Serenity.DecimalEditor;
        PrctTargetQ44: Serenity.DecimalEditor;
        PrctTargetQ45: Serenity.DecimalEditor;
        LoadDt: Serenity.DateEditor;
    }

    [,
        ['CompanyCd', () => Serenity.DecimalEditor],
        ['KeyAcctLink', () => Serenity.StringEditor],
        ['AccountType', () => Serenity.StringEditor],
        ['CcfTargetQ1', () => Serenity.DecimalEditor],
        ['CcfTargetQ12', () => Serenity.DecimalEditor],
        ['CcfTargetQ13', () => Serenity.DecimalEditor],
        ['CcfTargetQ14', () => Serenity.DecimalEditor],
        ['CcfTargetQ15', () => Serenity.DecimalEditor],
        ['CcfTargetQ2', () => Serenity.DecimalEditor],
        ['CcfTargetQ22', () => Serenity.DecimalEditor],
        ['CcfTargetQ23', () => Serenity.DecimalEditor],
        ['CcfTargetQ24', () => Serenity.DecimalEditor],
        ['CcfTargetQ25', () => Serenity.DecimalEditor],
        ['CcfTargetQ3', () => Serenity.DecimalEditor],
        ['CcfTargetQ32', () => Serenity.DecimalEditor],
        ['CcfTargetQ33', () => Serenity.DecimalEditor],
        ['CcfTargetQ34', () => Serenity.DecimalEditor],
        ['CcfTargetQ35', () => Serenity.DecimalEditor],
        ['CcfTargetQ4', () => Serenity.DecimalEditor],
        ['CcfTargetQ42', () => Serenity.DecimalEditor],
        ['CcfTargetQ43', () => Serenity.DecimalEditor],
        ['CcfTargetQ44', () => Serenity.DecimalEditor],
        ['CcfTargetQ45', () => Serenity.DecimalEditor],
        ['PrctTargetQ1', () => Serenity.DecimalEditor],
        ['PrctTargetQ12', () => Serenity.DecimalEditor],
        ['PrctTargetQ13', () => Serenity.DecimalEditor],
        ['PrctTargetQ14', () => Serenity.DecimalEditor],
        ['PrctTargetQ15', () => Serenity.DecimalEditor],
        ['PrctTargetQ2', () => Serenity.DecimalEditor],
        ['PrctTargetQ22', () => Serenity.DecimalEditor],
        ['PrctTargetQ23', () => Serenity.DecimalEditor],
        ['PrctTargetQ24', () => Serenity.DecimalEditor],
        ['PrctTargetQ25', () => Serenity.DecimalEditor],
        ['PrctTargetQ3', () => Serenity.DecimalEditor],
        ['PrctTargetQ32', () => Serenity.DecimalEditor],
        ['PrctTargetQ33', () => Serenity.DecimalEditor],
        ['PrctTargetQ34', () => Serenity.DecimalEditor],
        ['PrctTargetQ35', () => Serenity.DecimalEditor],
        ['PrctTargetQ4', () => Serenity.DecimalEditor],
        ['PrctTargetQ42', () => Serenity.DecimalEditor],
        ['PrctTargetQ43', () => Serenity.DecimalEditor],
        ['PrctTargetQ44', () => Serenity.DecimalEditor],
        ['PrctTargetQ45', () => Serenity.DecimalEditor],
        ['LoadDt', () => Serenity.DateEditor]
    ].forEach(x => Object.defineProperty(SuppKeyAcctTargetForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}