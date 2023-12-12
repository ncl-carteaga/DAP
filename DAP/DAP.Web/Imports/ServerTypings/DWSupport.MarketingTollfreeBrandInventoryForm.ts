namespace DAP.DWSupport {
    export interface MarketingTollfreeBrandInventoryForm {
        BrandId: Serenity.LookupEditor;
        Location: Serenity.StringEditor;
        TollFreeNumber: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Vdn: Serenity.StringEditor;
        ModifiedBy: Serenity.StringEditor;
        CreatedBy: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
        CreatedTs: Serenity.DateEditor;
    }

    export class MarketingTollfreeBrandInventoryForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.MarketingTollfreeBrandInventory';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MarketingTollfreeBrandInventoryForm.init)  {
                MarketingTollfreeBrandInventoryForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;

                Q.initFormType(MarketingTollfreeBrandInventoryForm, [
                    'BrandId', w0,
                    'Location', w1,
                    'TollFreeNumber', w1,
                    'Description', w1,
                    'Vdn', w1,
                    'ModifiedBy', w1,
                    'CreatedBy', w1,
                    'ModifiedTs', w2,
                    'CreatedTs', w2
                ]);
            }
        }
    }
}

