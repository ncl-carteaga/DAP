namespace DAP.DWSupport {
    export interface CapacitySuppForm {
        ShipCd: Serenity.LookupEditor;
        DoCapacity: Serenity.IntegerEditor;
        CabinCapacity: Serenity.IntegerEditor;
        EffectiveFromDt: Serenity.DateEditor;
        EffectiveToDt: Serenity.DateEditor;
        SailStartDate: Serenity.DateEditor;
        SailEndDate: Serenity.DateEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
        ModifiedByNam: Serenity.StringEditor;
    }

    export class CapacitySuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.CapacitySupp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CapacitySuppForm.init)  {
                CapacitySuppForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;
                var w3 = s.StringEditor;

                Q.initFormType(CapacitySuppForm, [
                    'ShipCd', w0,
                    'DoCapacity', w1,
                    'CabinCapacity', w1,
                    'EffectiveFromDt', w2,
                    'EffectiveToDt', w2,
                    'SailStartDate', w2,
                    'SailEndDate', w2,
                    'CreatedTs', w2,
                    'CreatedByNam', w3,
                    'ModifiedTs', w2,
                    'ModifiedByNam', w3
                ]);
            }
        }
    }
}

