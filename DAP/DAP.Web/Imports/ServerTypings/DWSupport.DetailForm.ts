namespace DAP.DWSupport {
    export interface DetailForm {
        Key1: Serenity.IntegerEditor;
        Key2: Serenity.IntegerEditor;
        Value1: Serenity.StringEditor;
        Value2: Serenity.StringEditor;
    }

    export class DetailForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.Detail';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DetailForm.init)  {
                DetailForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(DetailForm, [
                    'Key1', w0,
                    'Key2', w0,
                    'Value1', w1,
                    'Value2', w1
                ]);
            }
        }
    }
}

