namespace DAP.DWSupport {
    export interface AirCostAdjSuppForm {
        VoyageCd: Serenity.StringEditor;
        RmEstimatedAirCost: Serenity.DecimalEditor;
        EffectiveFromDt: Serenity.DateEditor;
        EffectiveToDt: Serenity.DateEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
        ModifiedByNam: Serenity.StringEditor;
    }

    export class AirCostAdjSuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.AirCostAdjSupp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AirCostAdjSuppForm.init)  {
                AirCostAdjSuppForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.DateEditor;

                Q.initFormType(AirCostAdjSuppForm, [
                    'VoyageCd', w0,
                    'RmEstimatedAirCost', w1,
                    'EffectiveFromDt', w2,
                    'EffectiveToDt', w2,
                    'CreatedTs', w2,
                    'CreatedByNam', w0,
                    'ModifiedTs', w2,
                    'ModifiedByNam', w0
                ]);
            }
        }
    }
}

