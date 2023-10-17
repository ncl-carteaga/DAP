namespace DAP.DWSupport {
    export interface CmiSuppForm {
        Id: Serenity.IntegerEditor;
        SailYear: Serenity.IntegerEditor;
        EffectiveStartDate: Serenity.DateEditor;
        EffectiveEndDate: Serenity.DateEditor;
        VoyageCD: Serenity.StringEditor;
        ShipCD: Serenity.LookupEditor;
        VoyageStartDate: Serenity.DateEditor;
        VoyageEndDate: Serenity.DateEditor;
        AgencyID: Serenity.IntegerEditor;
        Market: Serenity.StringEditor;
        CmiTypeCd: Serenity.StringEditor;
        CharterFlagCd: Serenity.StringEditor;
        Ntr: Serenity.DecimalEditor;
        PaxDays: Serenity.IntegerEditor;
        BkCabinDays: Serenity.IntegerEditor;
        CapacityDays: Serenity.IntegerEditor;
        CabinCapacityDays: Serenity.IntegerEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedByName: Serenity.StringEditor;
        ModifiedTs: Serenity.StringEditor;
        CreatedTs: Serenity.StringEditor;
    }

    export class CmiSuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.CmiSupp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CmiSuppForm.init)  {
                CmiSuppForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateEditor;
                var w2 = s.StringEditor;
                var w3 = s.LookupEditor;
                var w4 = s.DecimalEditor;

                Q.initFormType(CmiSuppForm, [
                    'Id', w0,
                    'SailYear', w0,
                    'EffectiveStartDate', w1,
                    'EffectiveEndDate', w1,
                    'VoyageCD', w2,
                    'ShipCD', w3,
                    'VoyageStartDate', w1,
                    'VoyageEndDate', w1,
                    'AgencyID', w0,
                    'Market', w2,
                    'CmiTypeCd', w2,
                    'CharterFlagCd', w2,
                    'Ntr', w4,
                    'PaxDays', w0,
                    'BkCabinDays', w0,
                    'CapacityDays', w0,
                    'CabinCapacityDays', w0,
                    'CreatedByNam', w2,
                    'ModifiedByName', w2,
                    'ModifiedTs', w2,
                    'CreatedTs', w2
                ]);
            }
        }
    }
}

