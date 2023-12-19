
namespace DAP.DWSupport {
    export class SuperPriceProgramsSuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.SuperPriceProgramsSupp';
    }

    export interface SuperPriceProgramsSuppForm {
        MetaPriceProgramCd: Serenity.StringEditor;
        SuperPriceProgramCd: Serenity.StringEditor;
        MetaPricePrgrmPriorityNbr: Serenity.IntegerEditor;
        MetaPriceProgramDesc: Serenity.StringEditor;
        MetaMetaPriceProgramCd: Serenity.StringEditor;
        MetaMetaPriceProgramDesc: Serenity.StringEditor;
        CreatedTs: Serenity.StringEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.StringEditor;
    }

    [,
        ['MetaPriceProgramCd', () => Serenity.StringEditor],
        ['SuperPriceProgramCd', () => Serenity.StringEditor],
        ['MetaPricePrgrmPriorityNbr', () => Serenity.IntegerEditor],
        ['MetaPriceProgramDesc', () => Serenity.StringEditor],
        ['MetaMetaPriceProgramCd', () => Serenity.StringEditor],
        ['MetaMetaPriceProgramDesc', () => Serenity.StringEditor],
        ['CreatedTs', () => Serenity.StringEditor],
        ['CreatedByNam', () => Serenity.StringEditor],
        ['ModifiedByNam', () => Serenity.StringEditor],
        ['ModifiedTs', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(SuperPriceProgramsSuppForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}