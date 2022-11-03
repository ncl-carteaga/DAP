namespace DAP.PCHDW {
    export interface VwSqlJobListForm {
        Enabled: Serenity.IntegerEditor;
        DateCreated: Serenity.DateEditor;
        DateModified: Serenity.DateEditor;
    }

    export class VwSqlJobListForm extends Serenity.PrefixedContext {
        static formKey = 'PCHDW.VwSqlJobList';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VwSqlJobListForm.init)  {
                VwSqlJobListForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateEditor;

                Q.initFormType(VwSqlJobListForm, [
                    'Enabled', w0,
                    'DateCreated', w1,
                    'DateModified', w1
                ]);
            }
        }
    }
}

