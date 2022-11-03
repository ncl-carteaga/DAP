namespace DAP.DWSupport {
    export interface SailingMasterSuppExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    export class SailingMasterSuppExcelImportForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.SailingMasterSuppExcelImport';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SailingMasterSuppExcelImportForm.init)  {
                SailingMasterSuppExcelImportForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;

                Q.initFormType(SailingMasterSuppExcelImportForm, [
                    'FileName', w0
                ]);
            }
        }
    }
}

