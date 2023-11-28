namespace DAP.DWSupport {
    export interface DrydockSuppForm {
        ShipCd: Serenity.LookupEditor;
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        NumberOfDays: Serenity.IntegerEditor;
        EffectiveFromDt: Serenity.DateEditor;
        EffectiveToDt: Serenity.DateEditor;
        SailYear: Serenity.IntegerEditor;
        Status: Serenity.LookupEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
        ModifiedByNam: Serenity.StringEditor;
    }

    export class DrydockSuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.DrydockSupp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DrydockSuppForm.init)  {
                DrydockSuppForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.StringEditor;

                Q.initFormType(DrydockSuppForm, [
                    'ShipCd', w0,
                    'StartDate', w1,
                    'EndDate', w1,
                    'NumberOfDays', w2,
                    'EffectiveFromDt', w1,
                    'EffectiveToDt', w1,
                    'SailYear', w2,
                    'Status', w0,
                    'CreatedTs', w1,
                    'CreatedByNam', w3,
                    'ModifiedTs', w1,
                    'ModifiedByNam', w3
                ]);
            }
        }
    }
}

