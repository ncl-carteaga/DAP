namespace DAP.DWSupport {
    export interface VoyageBudgetFinalSuppForm {
        ShipCd: Serenity.StringEditor;
        VoyageCd: Serenity.StringEditor;
        SalesChannelDesc: Serenity.StringEditor;
        YearNbr: Serenity.IntegerEditor;
        MonthNbr: Serenity.IntegerEditor;
        OperationalNtrAmt: Serenity.DecimalEditor;
        PassengerCountQty: Serenity.DecimalEditor;
        PassengerDaysQty: Serenity.DecimalEditor;
        CapacityDaysQty: Serenity.DecimalEditor;
        CabinDaysQty: Serenity.DecimalEditor;
        BudgetTypeCd: Serenity.StringEditor;
        CharterFlagCd: Serenity.StringEditor;
        BkCabinDaysQty: Serenity.DecimalEditor;
        BkCabinQty: Serenity.DecimalEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
        ModifiedByNam: Serenity.StringEditor;
    }

    export class VoyageBudgetFinalSuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.VoyageBudgetFinalSupp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VoyageBudgetFinalSuppForm.init)  {
                VoyageBudgetFinalSuppForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.DateEditor;

                Q.initFormType(VoyageBudgetFinalSuppForm, [
                    'ShipCd', w0,
                    'VoyageCd', w0,
                    'SalesChannelDesc', w0,
                    'YearNbr', w1,
                    'MonthNbr', w1,
                    'OperationalNtrAmt', w2,
                    'PassengerCountQty', w2,
                    'PassengerDaysQty', w2,
                    'CapacityDaysQty', w2,
                    'CabinDaysQty', w2,
                    'BudgetTypeCd', w0,
                    'CharterFlagCd', w0,
                    'BkCabinDaysQty', w2,
                    'BkCabinQty', w2,
                    'CreatedTs', w3,
                    'CreatedByNam', w0,
                    'ModifiedTs', w3,
                    'ModifiedByNam', w0
                ]);
            }
        }
    }
}

