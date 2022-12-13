
namespace DAP.PCHODS {
    export class InboundUserOverrideForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODS.InboundUserOverride';
    }

    export interface InboundUserOverrideForm {
        Company: Serenity.StringEditor;
        Invoice: Serenity.StringEditor;
        UserAssign: Serenity.StringEditor;
        ItDescription: Serenity.IntegerEditor;
        Inbound: Serenity.StringEditor;
        Comments: Serenity.StringEditor;
    }

    [,
        ['Company', () => Serenity.StringEditor],
        ['Invoice', () => Serenity.StringEditor],
        ['UserAssign', () => Serenity.StringEditor],
        ['ItDescription', () => Serenity.IntegerEditor],
        ['Inbound', () => Serenity.StringEditor],
        ['Comments', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(InboundUserOverrideForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}