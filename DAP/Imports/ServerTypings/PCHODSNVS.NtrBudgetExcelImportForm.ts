namespace DAP.PCHODSNVS {
    export interface NtrBudgetExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    export class NtrBudgetExcelImportForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODSNVS.NtrBudgetExcelImport';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!NtrBudgetExcelImportForm.init)  {
                NtrBudgetExcelImportForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;

                Q.initFormType(NtrBudgetExcelImportForm, [
                    'FileName', w0
                ]);
            }
        }
    }
}

