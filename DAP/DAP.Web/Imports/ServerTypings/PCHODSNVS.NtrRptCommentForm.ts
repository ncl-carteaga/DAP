namespace DAP.PCHODSNVS {
    export interface NtrRptCommentForm {
        CompanyCd: Serenity.StringEditor;
        ReportDate: Serenity.DateEditor;
        Comment: Serenity.TextAreaEditor;
        AccountPeriodNum: Serenity.StringEditor;
    }

    export class NtrRptCommentForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODSNVS.NtrRptComment';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!NtrRptCommentForm.init)  {
                NtrRptCommentForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.TextAreaEditor;

                Q.initFormType(NtrRptCommentForm, [
                    'CompanyCd', w0,
                    'ReportDate', w1,
                    'Comment', w2,
                    'AccountPeriodNum', w0
                ]);
            }
        }
    }
}

