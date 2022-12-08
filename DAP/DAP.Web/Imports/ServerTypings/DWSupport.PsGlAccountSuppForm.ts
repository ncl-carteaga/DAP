namespace DAP.DWSupport {
    export interface PsGlAccountSuppForm {
        SetId: Serenity.StringEditor;
        AccountId: Serenity.StringEditor;
        OlapAccountDesc: Serenity.StringEditor;
        GrossCostCd: Serenity.StringEditor;
        AccountClassType1Cd: Serenity.StringEditor;
        AccountClassType2Cd: Serenity.StringEditor;
        AccountClassType3Cd: Serenity.StringEditor;
        AccountClassType4Cd: Serenity.StringEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
    }

    export class PsGlAccountSuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.PsGlAccountSupp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PsGlAccountSuppForm.init)  {
                PsGlAccountSuppForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;

                Q.initFormType(PsGlAccountSuppForm, [
                    'SetId', w0,
                    'AccountId', w0,
                    'OlapAccountDesc', w0,
                    'GrossCostCd', w0,
                    'AccountClassType1Cd', w0,
                    'AccountClassType2Cd', w0,
                    'AccountClassType3Cd', w0,
                    'AccountClassType4Cd', w0,
                    'CreatedTs', w1,
                    'CreatedByNam', w0,
                    'ModifiedByNam', w0,
                    'ModifiedTs', w1
                ]);
            }
        }
    }
}

