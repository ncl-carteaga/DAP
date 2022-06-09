
namespace DAP.DWSupport {
    export class AgencySnapshotRequestForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.AgencySnapshotRequest';
    }

    export interface AgencySnapshotRequestForm {
        RequestedBy: Serenity.StringEditor;
        RequestedByDate: Serenity.DateEditor;
        RequestedReason: Serenity.StringEditor;
        CreatedBy: Serenity.StringEditor;
        CreatedDate: Serenity.DateEditor;
        ModifiedBy: Serenity.StringEditor;
        ModifiedDate: Serenity.DateEditor;
    }

    [,
        ['RequestedBy', () => Serenity.StringEditor],
        ['RequestedByDate', () => Serenity.DateEditor],
        ['RequestedReason', () => Serenity.StringEditor],
        ['CreatedBy', () => Serenity.StringEditor],
        ['CreatedDate', () => Serenity.DateEditor],
        ['ModifiedBy', () => Serenity.StringEditor],
        ['ModifiedDate', () => Serenity.DateEditor]
    ].forEach(x => Object.defineProperty(AgencySnapshotRequestForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}