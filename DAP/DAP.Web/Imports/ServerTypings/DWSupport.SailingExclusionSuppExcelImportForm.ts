namespace DAP.DWSupport {
    export interface SailingExclusionSuppExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    export class SailingExclusionSuppExcelImportForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.SailingExclusionSuppExcelImport';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SailingExclusionSuppExcelImportForm.init)  {
                SailingExclusionSuppExcelImportForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;

                Q.initFormType(SailingExclusionSuppExcelImportForm, [
                    'FileName', w0
                ]);
            }
        }
    }
}

