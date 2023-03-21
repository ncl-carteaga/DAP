namespace DAP.DWSupport {
    export interface GtfSuppForm {
        ShipCd: Serenity.LookupEditor;
        CategoryCd: GTFCategoryEditor;
        EmbarkDebarkCd: Serenity.LookupEditor;
        Rate: Serenity.DecimalEditor;
        EffectiveFromDt: Serenity.DateEditor;
        EffectiveToDt: Serenity.DateEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
        ModifiedByNam: Serenity.StringEditor;
    }

    export class GtfSuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.GtfSupp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!GtfSuppForm.init)  {
                GtfSuppForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = GTFCategoryEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.DateEditor;
                var w4 = s.StringEditor;

                Q.initFormType(GtfSuppForm, [
                    'ShipCd', w0,
                    'CategoryCd', w1,
                    'EmbarkDebarkCd', w0,
                    'Rate', w2,
                    'EffectiveFromDt', w3,
                    'EffectiveToDt', w3,
                    'CreatedTs', w3,
                    'CreatedByNam', w4,
                    'ModifiedTs', w3,
                    'ModifiedByNam', w4
                ]);
            }
        }
    }
}

