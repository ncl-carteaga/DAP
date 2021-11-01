namespace DAP.PCHODSNVS {
    export interface NtrBudgetForm {
        CompanyCd: PCHODS.CompanyEditor;
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
                var w0 = PCHODS.CompanyEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(NtrBudgetForm, [
                    'CompanyCd', w0,
                    'AccountPeriodNum', w1,
                    'NtrBudget', w2,
                    'PdsBudgetTotal', w2,
                    'ApcdFinal', w2,
                    'NtrFinancialBudget', w2
                ]);
            }
        }
    }
}

