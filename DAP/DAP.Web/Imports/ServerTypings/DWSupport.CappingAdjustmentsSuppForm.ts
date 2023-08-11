namespace DAP.DWSupport {
    export interface CappingAdjustmentsSuppForm {
        CompanyCd: PCHODS.CompanyEditor;
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
                var w0 = PCHODS.CompanyEditor;
                var w1 = s.LookupEditor;
                var w2 = s.StringEditor;
                var w3 = s.IntegerEditor;
                var w4 = s.DateEditor;

                Q.initFormType(CappingAdjustmentsSuppForm, [
                    'CompanyCd', w0,
                    'ShipCd', w1,
                    'CruiseCd', w2,
                    'CappedCabinCapacity', w3,
                    'SingleCabinCapacity', w3,
                    'EffectiveFromDate', w4,
                    'EffectiveToDate', w4,
                    'ModifiedTs', w4,
                    'ModifiedByNam', w2
                ]);
            }
        }
    }
}

