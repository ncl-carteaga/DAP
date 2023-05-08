namespace DAP.DWSupport {
    export interface RollupProductCodesSuppForm {
        ProductCd: Serenity.LookupEditor;
        RmRollupProductCd: Serenity.StringEditor;
        RmRollupProductDesc: Serenity.StringEditor;
        BrochureRollupProductCd: Serenity.StringEditor;
        BrochureRollupProductDesc: Serenity.StringEditor;
        CreatedByNam: Serenity.StringEditor;
        CreatedTs: Serenity.DateEditor;
        ModifiedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
    }

    export class RollupProductCodesSuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.RollupProductCodesSupp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RollupProductCodesSuppForm.init)  {
                RollupProductCodesSuppForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;

                Q.initFormType(RollupProductCodesSuppForm, [
                    'ProductCd', w0,
                    'RmRollupProductCd', w1,
                    'RmRollupProductDesc', w1,
                    'BrochureRollupProductCd', w1,
                    'BrochureRollupProductDesc', w1,
                    'CreatedByNam', w1,
                    'CreatedTs', w2,
                    'ModifiedByNam', w1,
                    'ModifiedTs', w2
                ]);
            }
        }
    }
}

