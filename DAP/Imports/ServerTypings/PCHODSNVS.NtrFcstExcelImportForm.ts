namespace DAP.PCHODSNVS {
    export interface NtrFcstExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    export class NtrFcstExcelImportForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODSNVS.NtrFcstExcelImport';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!NtrFcstExcelImportForm.init)  {
                NtrFcstExcelImportForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;

                Q.initFormType(NtrFcstExcelImportForm, [
                    'FileName', w0
                ]);
            }
        }
    }
}

