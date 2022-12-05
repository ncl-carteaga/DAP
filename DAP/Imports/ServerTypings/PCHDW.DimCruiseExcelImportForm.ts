namespace DAP.PCHDW {
    export interface DimCruiseExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    export class DimCruiseExcelImportForm extends Serenity.PrefixedContext {
        static formKey = 'PCHDW.DimCruiseExcelImport';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DimCruiseExcelImportForm.init)  {
                DimCruiseExcelImportForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;

                Q.initFormType(DimCruiseExcelImportForm, [
                    'FileName', w0
                ]);
            }
        }
    }
}

