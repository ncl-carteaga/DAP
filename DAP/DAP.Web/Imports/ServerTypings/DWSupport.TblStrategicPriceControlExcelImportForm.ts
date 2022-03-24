namespace DAP.DWSupport {
    export interface TblStrategicPriceControlExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    export class TblStrategicPriceControlExcelImportForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.TblStrategicPriceControlExcelImport';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblStrategicPriceControlExcelImportForm.init)  {
                TblStrategicPriceControlExcelImportForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;

                Q.initFormType(TblStrategicPriceControlExcelImportForm, [
                    'FileName', w0
                ]);
            }
        }
    }
}

