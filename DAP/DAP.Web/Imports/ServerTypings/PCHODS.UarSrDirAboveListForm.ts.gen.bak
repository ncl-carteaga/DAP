
namespace DAP.PCHODS {
    export class UarSrDirAboveListForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODS.UarSrDirAboveList';
    }

    export interface UarSrDirAboveListForm {
        Jobtitle: Serenity.StringEditor;
        IsSrDirAbove: Serenity.IntegerEditor;
        DateEffective: Serenity.DateEditor;
        DateExpires: Serenity.DateEditor;
        RowChangeReason: Serenity.StringEditor;
    }

    [,
        ['Jobtitle', () => Serenity.StringEditor],
        ['IsSrDirAbove', () => Serenity.IntegerEditor],
        ['DateEffective', () => Serenity.DateEditor],
        ['DateExpires', () => Serenity.DateEditor],
        ['RowChangeReason', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(UarSrDirAboveListForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}