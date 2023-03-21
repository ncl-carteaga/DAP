namespace DAP.DWSupport {
    export interface FinPlannedCapacitySuppForm {
        ShipCd: Serenity.StringEditor;
        SailFromDat: Serenity.DateEditor;
        SailToDat: Serenity.DateEditor;
        FinancialCabinCapacityQty: Serenity.IntegerEditor;
        FinancialGuestCapacityQty: Serenity.IntegerEditor;
        CapacityDesc: Serenity.StringEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
        UnadjustedFinancialCabinCapacityQty: Serenity.IntegerEditor;
        UnadjustedFinancialGuestCapacityQty: Serenity.IntegerEditor;
    }

    export class FinPlannedCapacitySuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.FinPlannedCapacitySupp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FinPlannedCapacitySuppForm.init)  {
                FinPlannedCapacitySuppForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(FinPlannedCapacitySuppForm, [
                    'ShipCd', w0,
                    'SailFromDat', w1,
                    'SailToDat', w1,
                    'FinancialCabinCapacityQty', w2,
                    'FinancialGuestCapacityQty', w2,
                    'CapacityDesc', w0,
                    'CreatedTs', w1,
                    'CreatedByNam', w0,
                    'ModifiedByNam', w0,
                    'ModifiedTs', w1,
                    'UnadjustedFinancialCabinCapacityQty', w2,
                    'UnadjustedFinancialGuestCapacityQty', w2
                ]);
            }
        }
    }
}

