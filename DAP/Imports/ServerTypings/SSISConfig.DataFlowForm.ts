﻿namespace DAP.SSISConfig {
    export interface DataFlowForm {
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
    }

    export class DataFlowForm extends Serenity.PrefixedContext {
        static formKey = 'SSISConfig.DataFlow';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DataFlowForm.init)  {
                DataFlowForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateTimeEditor;

                Q.initFormType(DataFlowForm, [
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
                    'Cet', w2
                ]);
            }
        }
    }
}
