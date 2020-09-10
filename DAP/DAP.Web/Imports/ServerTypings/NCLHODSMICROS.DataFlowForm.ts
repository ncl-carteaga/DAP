
namespace DAP.NCLHODSMICROS {
    export class DataFlowForm extends Serenity.PrefixedContext {
        static formKey = 'NCLHODSMICROS.DataFlow';
    }

    export interface DataFlowForm {
        Source: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        ProcessYn: Serenity.StringEditor;
        Target: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        SourceDesc: Serenity.StringEditor;
        TargetDesc: Serenity.StringEditor;
        Package: Serenity.StringEditor;
        Status: Serenity.IntegerEditor;
        Lset: Serenity.DateEditor;
        Cet: Serenity.DateEditor;
    }

    [,
        ['Source', () => Serenity.StringEditor],
        ['Name', () => Serenity.StringEditor],
        ['ProcessYn', () => Serenity.StringEditor],
        ['Target', () => Serenity.StringEditor],
        ['Description', () => Serenity.StringEditor],
        ['SourceDesc', () => Serenity.StringEditor],
        ['TargetDesc', () => Serenity.StringEditor],
        ['Package', () => Serenity.StringEditor],
        ['Status', () => Serenity.IntegerEditor],
        ['Lset', () => Serenity.DateEditor],
        ['Cet', () => Serenity.DateEditor]
    ].forEach(x => Object.defineProperty(DataFlowForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}