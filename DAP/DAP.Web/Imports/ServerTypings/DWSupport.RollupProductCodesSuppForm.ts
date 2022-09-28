namespace DAP.DWSupport {
    export interface RollupProductCodesSuppForm {
        ProductCd: Serenity.StringEditor;
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
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;

                Q.initFormType(RollupProductCodesSuppForm, [
                    'ProductCd', w0,
                    'RmRollupProductCd', w0,
                    'RmRollupProductDesc', w0,
                    'BrochureRollupProductCd', w0,
                    'BrochureRollupProductDesc', w0,
                    'CreatedByNam', w0,
                    'CreatedTs', w1,
                    'ModifiedByNam', w0,
                    'ModifiedTs', w1
                ]);
            }
        }
    }
}

