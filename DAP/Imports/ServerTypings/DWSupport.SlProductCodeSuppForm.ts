namespace DAP.DWSupport {
    export interface SlProductCodeSuppForm {
        SlProductCd: Serenity.StringEditor;
        SlProductDesc: Serenity.StringEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByName: Serenity.StringEditor;
        ModifiedByName: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
    }

    export class SlProductCodeSuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.SlProductCodeSupp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SlProductCodeSuppForm.init)  {
                SlProductCodeSuppForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;

                Q.initFormType(SlProductCodeSuppForm, [
                    'SlProductCd', w0,
                    'SlProductDesc', w0,
                    'CreatedTs', w1,
                    'CreatedByName', w0,
                    'ModifiedByName', w0,
                    'ModifiedTs', w1
                ]);
            }
        }
    }
}

