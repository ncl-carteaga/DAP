namespace DAP.PCHODSNVS {
    export interface NtrBudgetByChannelExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    export class NtrBudgetByChannelExcelImportForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODSNVS.NtrBudgetByChannelExcelImport';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!NtrBudgetByChannelExcelImportForm.init)  {
                NtrBudgetByChannelExcelImportForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;

                Q.initFormType(NtrBudgetByChannelExcelImportForm, [
                    'FileName', w0
                ]);
            }
        }
    }
}

