namespace DAP.DWSupport {
    export interface ProductCodeSuppForm {
        ProductCd: Serenity.StringEditor;
        ProductDesc: Serenity.StringEditor;
        ProductCodeId: Serenity.IntegerEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByName: Serenity.StringEditor;
        ModifiedByName: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
    }

    export class ProductCodeSuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.ProductCodeSupp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductCodeSuppForm.init)  {
                ProductCodeSuppForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(ProductCodeSuppForm, [
                    'ProductCd', w0,
                    'ProductDesc', w0,
                    'ProductCodeId', w1,
                    'CreatedTs', w2,
                    'CreatedByName', w0,
                    'ModifiedByName', w0,
                    'ModifiedTs', w2
                ]);
            }
        }
    }
}

