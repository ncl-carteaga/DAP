namespace DAP.DWSupport {
    export interface SurveyFilterExclusionSuppForm {
        SurveyExclusionId: Serenity.StringEditor;
        ReasonDesc: Serenity.StringEditor;
        CommentsTxt: Serenity.StringEditor;
        SailId: Serenity.IntegerEditor;
        GuestId: Serenity.IntegerEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
    }

    export class SurveyFilterExclusionSuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.SurveyFilterExclusionSupp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SurveyFilterExclusionSuppForm.init)  {
                SurveyFilterExclusionSuppForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(SurveyFilterExclusionSuppForm, [
                    'SurveyExclusionId', w0,
                    'ReasonDesc', w0,
                    'CommentsTxt', w0,
                    'SailId', w1,
                    'GuestId', w1,
                    'CreatedTs', w2,
                    'CreatedByNam', w0,
                    'ModifiedByNam', w0,
                    'ModifiedTs', w2
                ]);
            }
        }
    }
}

