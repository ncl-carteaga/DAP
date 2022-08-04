namespace DAP.PCHODSNVS {
    export interface TransferEstimateOciAmtExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    export class TransferEstimateOciAmtExcelImportForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODSNVS.TransferEstimateOciAmtExcelImport';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TransferEstimateOciAmtExcelImportForm.init)  {
                TransferEstimateOciAmtExcelImportForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;

                Q.initFormType(TransferEstimateOciAmtExcelImportForm, [
                    'FileName', w0
                ]);
            }
        }
    }
}

