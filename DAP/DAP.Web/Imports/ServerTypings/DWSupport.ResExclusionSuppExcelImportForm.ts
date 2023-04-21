namespace DAP.DWSupport {
    export interface ResExclusionSuppExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    export class ResExclusionSuppExcelImportForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.ResExclusionSuppExcelImport';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ResExclusionSuppExcelImportForm.init)  {
                ResExclusionSuppExcelImportForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;

                Q.initFormType(ResExclusionSuppExcelImportForm, [
                    'FileName', w0
                ]);
            }
        }
    }
}

