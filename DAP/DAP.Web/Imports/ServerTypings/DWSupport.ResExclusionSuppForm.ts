namespace DAP.DWSupport {
    export interface ResExclusionSuppForm {
        ResId: Serenity.StringEditor;
        FromDataAsOfDt: Serenity.DateEditor;
        ToDataAsOfDt: Serenity.DateEditor;
        CommentTxt: Serenity.StringEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
        ModifiedByNam: Serenity.StringEditor;
    }

    export class ResExclusionSuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.ResExclusionSupp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ResExclusionSuppForm.init)  {
                ResExclusionSuppForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;

                Q.initFormType(ResExclusionSuppForm, [
                    'ResId', w0,
                    'FromDataAsOfDt', w1,
                    'ToDataAsOfDt', w1,
                    'CommentTxt', w0,
                    'CreatedTs', w1,
                    'CreatedByNam', w0,
                    'ModifiedTs', w1,
                    'ModifiedByNam', w0
                ]);
            }
        }
    }
}

