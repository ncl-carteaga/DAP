namespace DAP.DWSupport {
    export interface VoyageBudgetFinalExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    export class VoyageBudgetFinalExcelImportForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.VoyageBudgetFinalExcelImport';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VoyageBudgetFinalExcelImportForm.init)  {
                VoyageBudgetFinalExcelImportForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;

                Q.initFormType(VoyageBudgetFinalExcelImportForm, [
                    'FileName', w0
                ]);
            }
        }
    }
}

