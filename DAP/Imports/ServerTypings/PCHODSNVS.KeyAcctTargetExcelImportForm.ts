namespace DAP.PCHODSNVS {
    export interface KeyAcctTargetExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    export class KeyAcctTargetExcelImportForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODSNVS.KeyAcctTargetExcelImport';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!KeyAcctTargetExcelImportForm.init)  {
                KeyAcctTargetExcelImportForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;

                Q.initFormType(KeyAcctTargetExcelImportForm, [
                    'FileName', w0
                ]);
            }
        }
    }
}

