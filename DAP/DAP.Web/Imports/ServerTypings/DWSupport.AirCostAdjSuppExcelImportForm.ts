namespace DAP.DWSupport {
    export interface AirCostAdjSuppExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    export class AirCostAdjSuppExcelImportForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.AirCostAdjSuppExcelImport';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AirCostAdjSuppExcelImportForm.init)  {
                AirCostAdjSuppExcelImportForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;

                Q.initFormType(AirCostAdjSuppExcelImportForm, [
                    'FileName', w0
                ]);
            }
        }
    }
}

