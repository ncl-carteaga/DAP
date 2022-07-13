namespace DAP.DWSupport {
    export interface ImportErrorLogForm {
        RunNumber: Serenity.IntegerEditor;
        ImportDate: Serenity.DateEditor;
        Calledby: Serenity.StringEditor;
        FileName: Serenity.StringEditor;
        ErrorMessage: Serenity.TextAreaEditor;
    }

    export class ImportErrorLogForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.ImportErrorLog';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ImportErrorLogForm.init)  {
                ImportErrorLogForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateEditor;
                var w2 = s.StringEditor;
                var w3 = s.TextAreaEditor;

                Q.initFormType(ImportErrorLogForm, [
                    'RunNumber', w0,
                    'ImportDate', w1,
                    'Calledby', w2,
                    'FileName', w2,
                    'ErrorMessage', w3
                ]);
            }
        }
    }
}

