namespace DAP.DWSupport {
    export interface PortSubstitutionSuppForm {
        PortCd: Serenity.LookupEditor;
        PortNam: Serenity.StringEditor;
        PortSubstitutonNam: Serenity.StringEditor;
        CommentTxt: Serenity.StringEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
    }

    export class PortSubstitutionSuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.PortSubstitutionSupp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PortSubstitutionSuppForm.init)  {
                PortSubstitutionSuppForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;

                Q.initFormType(PortSubstitutionSuppForm, [
                    'PortCd', w0,
                    'PortNam', w1,
                    'PortSubstitutonNam', w1,
                    'CommentTxt', w1,
                    'CreatedTs', w2,
                    'CreatedByNam', w1,
                    'ModifiedByNam', w1,
                    'ModifiedTs', w2
                ]);
            }
        }
    }
}

