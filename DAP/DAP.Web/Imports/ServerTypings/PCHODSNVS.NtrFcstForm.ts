namespace DAP.PCHODSNVS {
    export interface NtrFcstForm {
        CompanyCd: SelectPCHCompanyEditor;
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
                var w0 = SelectPCHCompanyEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(NtrFcstForm, [
                    'CompanyCd', w0,
                    'AccountPeriodNum', w1,
                    'NtrFcst', w2,
                    'PdsFcstTotal', w2,
                    'ApcdFinal', w2,
                    'NtrFinancialBudget', w2
                ]);
            }
        }
    }
}

