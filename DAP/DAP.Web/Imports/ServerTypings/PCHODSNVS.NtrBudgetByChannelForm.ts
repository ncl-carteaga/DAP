﻿namespace DAP.PCHODSNVS {
    export interface NtrBudgetByChannelForm {
        CompanyCd: SelectPCHCompanyEditor;
        AccountingYear: Serenity.IntegerEditor;
        ChannelSummDesc: Serenity.StringEditor;
        ChannelDesc: Serenity.StringEditor;
        NtrBudget: Serenity.DecimalEditor;
        PdsBudgetTotal: Serenity.DecimalEditor;
        NpdBudget: Serenity.DecimalEditor;
    }

    export class NtrBudgetByChannelForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODSNVS.NtrBudgetByChannel';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!NtrBudgetByChannelForm.init)  {
                NtrBudgetByChannelForm.init = true;

                var s = Serenity;
                var w0 = SelectPCHCompanyEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.StringEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(NtrBudgetByChannelForm, [
                    'CompanyCd', w0,
                    'AccountingYear', w1,
                    'ChannelSummDesc', w2,
                    'ChannelDesc', w2,
                    'NtrBudget', w3,
                    'PdsBudgetTotal', w3,
                    'NpdBudget', w3
                ]);
            }
        }
    }
}

