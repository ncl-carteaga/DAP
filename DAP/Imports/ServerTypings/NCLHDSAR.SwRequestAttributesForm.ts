namespace DAP.NCLHDSAR {
    export interface SwRequestAttributesForm {
        Id: Serenity.StringEditor;
        SystemMasterId: SystemMasterEditor;
        RequestValue: Serenity.StringEditor;
        ResolvedDt: Serenity.DateEditor;
        ExtractDt: Serenity.DateEditor;
    }

    export class SwRequestAttributesForm extends Serenity.PrefixedContext {
        static formKey = 'NCLHDSAR.SwRequestAttributes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SwRequestAttributesForm.init)  {
                SwRequestAttributesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = SystemMasterEditor;
                var w2 = s.DateEditor;

                Q.initFormType(SwRequestAttributesForm, [
                    'Id', w0,
                    'SystemMasterId', w1,
                    'RequestValue', w0,
                    'ResolvedDt', w2,
                    'ExtractDt', w2
                ]);
            }
        }
    }
}

