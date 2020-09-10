namespace DAP.DWSupport {
    export interface FinReportPublishingSuppForm {
        PublishDat: Serenity.DateEditor;
        PublishCommentsTxt: Serenity.TextAreaEditor;
        PublishCd: Serenity.BooleanEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
        ModifiedByNam: Serenity.StringEditor;
        ProcessedDateTs: Serenity.DateEditor;
    }

    export class FinReportPublishingSuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.FinReportPublishingSupp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FinReportPublishingSuppForm.init)  {
                FinReportPublishingSuppForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.BooleanEditor;
                var w3 = s.StringEditor;

                Q.initFormType(FinReportPublishingSuppForm, [
                    'PublishDat', w0,
                    'PublishCommentsTxt', w1,
                    'PublishCd', w2,
                    'CreatedTs', w0,
                    'CreatedByNam', w3,
                    'ModifiedTs', w0,
                    'ModifiedByNam', w3,
                    'ProcessedDateTs', w0
                ]);
            }
        }
    }
}

