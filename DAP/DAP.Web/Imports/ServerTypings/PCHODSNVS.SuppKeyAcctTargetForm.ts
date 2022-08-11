namespace DAP.PCHODSNVS {
    export interface SuppKeyAcctTargetForm {
        CompanyCd: SelectPCHCompanyEditor;
        AgencyCd: Serenity.LookupEditor;
        Year: Serenity.IntegerEditor;
        KeyAcctLink: Serenity.StringEditor;
        AccountType: Serenity.StringEditor;
        LoadDt: Serenity.DateEditor;
        CcfTargetQ1: Serenity.DecimalEditor;
        PrctTargetQ1: Serenity.DecimalEditor;
        CcfTargetQ12: Serenity.DecimalEditor;
        PrctTargetQ12: Serenity.DecimalEditor;
        CcfTargetQ13: Serenity.DecimalEditor;
        PrctTargetQ13: Serenity.DecimalEditor;
        CcfTargetQ14: Serenity.DecimalEditor;
        PrctTargetQ14: Serenity.DecimalEditor;
        CcfTargetQ15: Serenity.DecimalEditor;
        PrctTargetQ15: Serenity.DecimalEditor;
        CcfTargetQ2: Serenity.DecimalEditor;
        PrctTargetQ2: Serenity.DecimalEditor;
        CcfTargetQ22: Serenity.DecimalEditor;
        PrctTargetQ22: Serenity.DecimalEditor;
        CcfTargetQ23: Serenity.DecimalEditor;
        PrctTargetQ23: Serenity.DecimalEditor;
        CcfTargetQ24: Serenity.DecimalEditor;
        PrctTargetQ24: Serenity.DecimalEditor;
        CcfTargetQ25: Serenity.DecimalEditor;
        PrctTargetQ25: Serenity.DecimalEditor;
        CcfTargetQ3: Serenity.DecimalEditor;
        PrctTargetQ3: Serenity.DecimalEditor;
        CcfTargetQ32: Serenity.DecimalEditor;
        PrctTargetQ32: Serenity.DecimalEditor;
        CcfTargetQ33: Serenity.DecimalEditor;
        PrctTargetQ33: Serenity.DecimalEditor;
        CcfTargetQ34: Serenity.DecimalEditor;
        PrctTargetQ34: Serenity.DecimalEditor;
        CcfTargetQ35: Serenity.DecimalEditor;
        PrctTargetQ35: Serenity.DecimalEditor;
        CcfTargetQ4: Serenity.DecimalEditor;
        PrctTargetQ4: Serenity.DecimalEditor;
        CcfTargetQ42: Serenity.DecimalEditor;
        PrctTargetQ42: Serenity.DecimalEditor;
        CcfTargetQ43: Serenity.DecimalEditor;
        PrctTargetQ43: Serenity.DecimalEditor;
        CcfTargetQ44: Serenity.DecimalEditor;
        PrctTargetQ44: Serenity.DecimalEditor;
        CcfTargetQ45: Serenity.DecimalEditor;
        PrctTargetQ45: Serenity.DecimalEditor;
        FyCcfTargetFy1: Serenity.DecimalEditor;
        FyCcfTargetFy2: Serenity.DecimalEditor;
        FyCcfTargetFy3: Serenity.DecimalEditor;
        FyCcfTargetFy4: Serenity.DecimalEditor;
        FyCcfTargetFy5: Serenity.DecimalEditor;
    }

    export class SuppKeyAcctTargetForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODSNVS.SuppKeyAcctTarget';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SuppKeyAcctTargetForm.init)  {
                SuppKeyAcctTargetForm.init = true;

                var s = Serenity;
                var w0 = SelectPCHCompanyEditor;
                var w1 = s.LookupEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.StringEditor;
                var w4 = s.DateEditor;
                var w5 = s.DecimalEditor;

                Q.initFormType(SuppKeyAcctTargetForm, [
                    'CompanyCd', w0,
                    'AgencyCd', w1,
                    'Year', w2,
                    'KeyAcctLink', w3,
                    'AccountType', w3,
                    'LoadDt', w4,
                    'CcfTargetQ1', w5,
                    'PrctTargetQ1', w5,
                    'CcfTargetQ12', w5,
                    'PrctTargetQ12', w5,
                    'CcfTargetQ13', w5,
                    'PrctTargetQ13', w5,
                    'CcfTargetQ14', w5,
                    'PrctTargetQ14', w5,
                    'CcfTargetQ15', w5,
                    'PrctTargetQ15', w5,
                    'CcfTargetQ2', w5,
                    'PrctTargetQ2', w5,
                    'CcfTargetQ22', w5,
                    'PrctTargetQ22', w5,
                    'CcfTargetQ23', w5,
                    'PrctTargetQ23', w5,
                    'CcfTargetQ24', w5,
                    'PrctTargetQ24', w5,
                    'CcfTargetQ25', w5,
                    'PrctTargetQ25', w5,
                    'CcfTargetQ3', w5,
                    'PrctTargetQ3', w5,
                    'CcfTargetQ32', w5,
                    'PrctTargetQ32', w5,
                    'CcfTargetQ33', w5,
                    'PrctTargetQ33', w5,
                    'CcfTargetQ34', w5,
                    'PrctTargetQ34', w5,
                    'CcfTargetQ35', w5,
                    'PrctTargetQ35', w5,
                    'CcfTargetQ4', w5,
                    'PrctTargetQ4', w5,
                    'CcfTargetQ42', w5,
                    'PrctTargetQ42', w5,
                    'CcfTargetQ43', w5,
                    'PrctTargetQ43', w5,
                    'CcfTargetQ44', w5,
                    'PrctTargetQ44', w5,
                    'CcfTargetQ45', w5,
                    'PrctTargetQ45', w5,
                    'FyCcfTargetFy1', w5,
                    'FyCcfTargetFy2', w5,
                    'FyCcfTargetFy3', w5,
                    'FyCcfTargetFy4', w5,
                    'FyCcfTargetFy5', w5
                ]);
            }
        }
    }
}

