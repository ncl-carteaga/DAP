namespace DAP.NCLHDSAR {
    export interface MarketingRequestExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    export class MarketingRequestExcelImportForm extends Serenity.PrefixedContext {
        static formKey = 'NCLHDSAR.MarketingRequestExcelImport';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MarketingRequestExcelImportForm.init)  {
                MarketingRequestExcelImportForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;

                Q.initFormType(MarketingRequestExcelImportForm, [
                    'FileName', w0
                ]);
            }
        }
    }
}

