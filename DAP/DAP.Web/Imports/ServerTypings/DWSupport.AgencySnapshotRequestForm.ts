namespace DAP.DWSupport {
    export interface AgencySnapshotRequestForm {
        RequestedBy: Serenity.StringEditor;
        RequestedByDate: Serenity.DateEditor;
        RequestedReason: Serenity.StringEditor;
        CreatedBy: Serenity.StringEditor;
        CreatedDate: Serenity.DateEditor;
        ModifiedBy: Serenity.StringEditor;
        ModifiedDate: Serenity.DateEditor;
    }

    export class AgencySnapshotRequestForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.AgencySnapshotRequest';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AgencySnapshotRequestForm.init)  {
                AgencySnapshotRequestForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;

                Q.initFormType(AgencySnapshotRequestForm, [
                    'RequestedBy', w0,
                    'RequestedByDate', w1,
                    'RequestedReason', w0,
                    'CreatedBy', w0,
                    'CreatedDate', w1,
                    'ModifiedBy', w0,
                    'ModifiedDate', w1
                ]);
            }
        }
    }
}

