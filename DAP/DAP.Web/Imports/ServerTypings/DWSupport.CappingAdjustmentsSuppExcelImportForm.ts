namespace DAP.DWSupport {
    export interface CappingAdjustmentsSuppExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    export class CappingAdjustmentsSuppExcelImportForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.CappingAdjustmentsSuppExcelImport';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CappingAdjustmentsSuppExcelImportForm.init)  {
                CappingAdjustmentsSuppExcelImportForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;

                Q.initFormType(CappingAdjustmentsSuppExcelImportForm, [
                    'FileName', w0
                ]);
            }
        }
    }
}

