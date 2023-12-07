namespace DAP.DWSupport {
    export interface CapacitySuppExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    export class CapacitySuppExcelImportForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.CapacitySuppExcelImport';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CapacitySuppExcelImportForm.init)  {
                CapacitySuppExcelImportForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;

                Q.initFormType(CapacitySuppExcelImportForm, [
                    'FileName', w0
                ]);
            }
        }
    }
}

