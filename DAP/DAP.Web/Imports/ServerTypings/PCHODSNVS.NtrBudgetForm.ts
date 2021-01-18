namespace DAP.PCHODSNVS {
    export interface NtrBudgetForm {
        CompanyCd: Serenity.StringEditor;
        AccountPeriodNum: Serenity.StringEditor;
        NtrBudget: Serenity.DecimalEditor;
        PdsBudgetTotal: Serenity.DecimalEditor;
        ApcdFinal: Serenity.DecimalEditor;
        NtrFinancialBudget: Serenity.DecimalEditor;
    }

    export class NtrBudgetForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODSNVS.NtrBudget';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!NtrBudgetForm.init)  {
                NtrBudgetForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(NtrBudgetForm, [
                    'CompanyCd', w0,
                    'AccountPeriodNum', w0,
                    'NtrBudget', w1,
                    'PdsBudgetTotal', w1,
                    'ApcdFinal', w1,
                    'NtrFinancialBudget', w1
                ]);
            }
        }
    }
}

