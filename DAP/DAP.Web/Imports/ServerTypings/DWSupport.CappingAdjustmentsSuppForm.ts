namespace DAP.DWSupport {
    export interface CappingAdjustmentsSuppForm {
        CompanyCd: Serenity.LookupEditor;
        ShipCd: Serenity.LookupEditor;
        CruiseCd: Serenity.StringEditor;
        CappedCabinCapacity: Serenity.IntegerEditor;
        SingleCabinCapacity: Serenity.IntegerEditor;
        EffectiveFromDate: Serenity.DateEditor;
        EffectiveToDate: Serenity.DateEditor;
        ModifiedTs: Serenity.DateEditor;
        ModifiedByNam: Serenity.StringEditor;
    }

    export class CappingAdjustmentsSuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.CappingAdjustmentsSupp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CappingAdjustmentsSuppForm.init)  {
                CappingAdjustmentsSuppForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DateEditor;

                Q.initFormType(CappingAdjustmentsSuppForm, [
                    'CompanyCd', w0,
                    'ShipCd', w0,
                    'CruiseCd', w1,
                    'CappedCabinCapacity', w2,
                    'SingleCabinCapacity', w2,
                    'EffectiveFromDate', w3,
                    'EffectiveToDate', w3,
                    'ModifiedTs', w3,
                    'ModifiedByNam', w1
                ]);
            }
        }
    }
}

