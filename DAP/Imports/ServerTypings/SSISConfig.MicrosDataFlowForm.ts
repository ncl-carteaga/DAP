namespace DAP.SSISConfig {
    export interface MicrosDataFlowForm {
        Source: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        ProcessYn: Serenity.StringEditor;
        Target: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        SourceDesc: Serenity.StringEditor;
        TargetDesc: Serenity.StringEditor;
        Package: Serenity.StringEditor;
        Status: Serenity.IntegerEditor;
        Lset: Serenity.DateTimeEditor;
        Cet: Serenity.DateTimeEditor;
        LseIndex: Serenity.IntegerEditor;
        CeIndex: Serenity.IntegerEditor;
    }

    export class MicrosDataFlowForm extends Serenity.PrefixedContext {
        static formKey = 'SSISConfig.MicrosDataFlow';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MicrosDataFlowForm.init)  {
                MicrosDataFlowForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateTimeEditor;

                Q.initFormType(MicrosDataFlowForm, [
                    'Source', w0,
                    'Name', w0,
                    'ProcessYn', w0,
                    'Target', w0,
                    'Description', w0,
                    'SourceDesc', w0,
                    'TargetDesc', w0,
                    'Package', w0,
                    'Status', w1,
                    'Lset', w2,
                    'Cet', w2,
                    'LseIndex', w1,
                    'CeIndex', w1
                ]);
            }
        }
    }
}

