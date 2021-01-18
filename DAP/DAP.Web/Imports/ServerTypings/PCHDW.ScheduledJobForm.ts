namespace DAP.PCHDW {
    export interface ScheduledJobForm {
        JobName: Serenity.StringEditor;
        JobDescription: Serenity.TextAreaEditor;
    }

    export class ScheduledJobForm extends Serenity.PrefixedContext {
        static formKey = 'PCHDW.ScheduledJob';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ScheduledJobForm.init)  {
                ScheduledJobForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(ScheduledJobForm, [
                    'JobName', w0,
                    'JobDescription', w1
                ]);
            }
        }
    }
}

