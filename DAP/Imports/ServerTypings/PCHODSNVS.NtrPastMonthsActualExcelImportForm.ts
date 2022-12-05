namespace DAP.PCHODSNVS {
    export interface NtrPastMonthsActualExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    export class NtrPastMonthsActualExcelImportForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODSNVS.NtrPastMonthsActualExcelImport';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!NtrPastMonthsActualExcelImportForm.init)  {
                NtrPastMonthsActualExcelImportForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;

                Q.initFormType(NtrPastMonthsActualExcelImportForm, [
                    'FileName', w0
                ]);
            }
        }
    }
}

