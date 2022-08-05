namespace DAP.PCHODS {
    export interface UarSrDirAboveListForm {
        Jobtitle: Serenity.StringEditor;
        IsSrDirAbove: Serenity.IntegerEditor;
        DateEffective: Serenity.DateEditor;
        DateExpires: Serenity.DateEditor;
        RowChangeReason: Serenity.StringEditor;
    }

    export class UarSrDirAboveListForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODS.UarSrDirAboveList';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UarSrDirAboveListForm.init)  {
                UarSrDirAboveListForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(UarSrDirAboveListForm, [
                    'Jobtitle', w0,
                    'IsSrDirAbove', w1,
                    'DateEffective', w2,
                    'DateExpires', w2,
                    'RowChangeReason', w0
                ]);
            }
        }
    }
}

