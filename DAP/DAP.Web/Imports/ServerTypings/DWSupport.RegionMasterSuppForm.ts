
namespace DAP.DWSupport {
    export class RegionMasterSuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.RegionMasterSupp';
    }

    export interface RegionMasterSuppForm {
        RegionCd: Serenity.StringEditor;
        ResponsibilityDesc: Serenity.StringEditor;
        SalesrepUserId: Serenity.StringEditor;
        CreatedByNam: Serenity.StringEditor;
        CreatedTs: Serenity.StringEditor;
        ModifiedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.StringEditor;
    }

    [,
        ['RegionCd', () => Serenity.StringEditor],
        ['ResponsibilityDesc', () => Serenity.StringEditor],
        ['SalesrepUserId', () => Serenity.StringEditor],
        ['CreatedByNam', () => Serenity.StringEditor],
        ['CreatedTs', () => Serenity.StringEditor],
        ['ModifiedByNam', () => Serenity.StringEditor],
        ['ModifiedTs', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(RegionMasterSuppForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}