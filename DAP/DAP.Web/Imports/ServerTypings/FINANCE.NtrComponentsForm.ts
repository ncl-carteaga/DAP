
namespace DAP.FINANCE {
    export class NtrComponentsForm extends Serenity.PrefixedContext {
        static formKey = 'FINANCE.NtrComponents';
    }

    export interface NtrComponentsForm {
        SubcategoryDesc: Serenity.StringEditor;
        GiftCd: Serenity.StringEditor;
    }

    [,
        ['SubcategoryDesc', () => Serenity.StringEditor],
        ['GiftCd', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(NtrComponentsForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}