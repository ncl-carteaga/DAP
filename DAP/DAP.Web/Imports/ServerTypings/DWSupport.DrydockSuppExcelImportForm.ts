namespace DAP.DWSupport {
    export interface DrydockSuppExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    export class DrydockSuppExcelImportForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.DrydockSuppExcelImport';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DrydockSuppExcelImportForm.init)  {
                DrydockSuppExcelImportForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;

                Q.initFormType(DrydockSuppExcelImportForm, [
                    'FileName', w0
                ]);
            }
        }
    }
}

