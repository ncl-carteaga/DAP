﻿namespace DAP.DWSupport {
    export interface CreditCardAdjSuppForm {
        Office: Serenity.LookupEditor;
        BlendedRate: Serenity.DecimalEditor;
        ProposedRate: Serenity.DecimalEditor;
        EffectiveFromDt: Serenity.DateEditor;
        EffectiveToDt: Serenity.DateEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByName: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
        ModifiedByNam: Serenity.StringEditor;
    }

    export class CreditCardAdjSuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.CreditCardAdjSupp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CreditCardAdjSuppForm.init)  {
                CreditCardAdjSuppForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.DateEditor;
                var w3 = s.StringEditor;

                Q.initFormType(CreditCardAdjSuppForm, [
                    'Office', w0,
                    'BlendedRate', w1,
                    'ProposedRate', w1,
                    'EffectiveFromDt', w2,
                    'EffectiveToDt', w2,
                    'CreatedTs', w2,
                    'CreatedByName', w3,
                    'ModifiedTs', w2,
                    'ModifiedByNam', w3
                ]);
            }
        }
    }
}

