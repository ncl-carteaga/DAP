namespace DAP.PCHODSNVS {
    export interface NtrFcstForm {
        CompanyCd: Serenity.StringEditor;
        AccountPeriodNum: Serenity.StringEditor;
        NtrFcst: Serenity.DecimalEditor;
        PdsFcstTotal: Serenity.DecimalEditor;
        ApcdFinal: Serenity.DecimalEditor;
        NtrFinancialBudget: Serenity.DecimalEditor;
    }

    export class NtrFcstForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODSNVS.NtrFcst';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!NtrFcstForm.init)  {
                NtrFcstForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(NtrFcstForm, [
                    'CompanyCd', w0,
                    'AccountPeriodNum', w0,
                    'NtrFcst', w1,
                    'PdsFcstTotal', w1,
                    'ApcdFinal', w1,
                    'NtrFinancialBudget', w1
                ]);
            }
        }
    }
}

