namespace DAP.PCHODS {
    export interface OutboundCommissionBkGoalForm {
        CompanyCd: CompanyEditor;
        CommissionMonth: Serenity.DateEditor;
        NumOfBkGoal: Serenity.IntegerEditor;
        LoadDt: Serenity.DateEditor;
    }

    export class OutboundCommissionBkGoalForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODS.OutboundCommissionBkGoal';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OutboundCommissionBkGoalForm.init)  {
                OutboundCommissionBkGoalForm.init = true;

                var s = Serenity;
                var w0 = CompanyEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(OutboundCommissionBkGoalForm, [
                    'CompanyCd', w0,
                    'CommissionMonth', w1,
                    'NumOfBkGoal', w2,
                    'LoadDt', w1
                ]);
            }
        }
    }
}

