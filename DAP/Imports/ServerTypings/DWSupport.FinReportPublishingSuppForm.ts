namespace DAP.DWSupport {
    export interface FinReportPublishingSuppForm {
        ReportName: Serenity.StringEditor;
        OnHold: Serenity.BooleanEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
        ModifiedByNam: Serenity.StringEditor;
    }

    export class FinReportPublishingSuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.FinReportPublishingSupp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FinReportPublishingSuppForm.init)  {
                FinReportPublishingSuppForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.BooleanEditor;
                var w2 = s.DateEditor;

                Q.initFormType(FinReportPublishingSuppForm, [
                    'ReportName', w0,
                    'OnHold', w1,
                    'CreatedTs', w2,
                    'CreatedByNam', w0,
                    'ModifiedTs', w2,
                    'ModifiedByNam', w0
                ]);
            }
        }
    }
}

