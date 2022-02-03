namespace DAP.DWSupport {
    export interface MasterForm {
        Key1: Serenity.IntegerEditor;
        Key2: Serenity.IntegerEditor;
        Comment: Serenity.StringEditor;
    }

    export class MasterForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.Master';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MasterForm.init)  {
                MasterForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(MasterForm, [
                    'Key1', w0,
                    'Key2', w0,
                    'Comment', w1
                ]);
            }
        }
    }
}

