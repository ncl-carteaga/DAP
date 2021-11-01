namespace DAP.PCHODSNVS {
    export interface SuppKeyAcctTargetForm {
        CompanyCd: Serenity.DecimalEditor;
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
    }

    export class SuppKeyAcctTargetForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODSNVS.SuppKeyAcctTarget';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SuppKeyAcctTargetForm.init)  {
                SuppKeyAcctTargetForm.init = true;

                var s = Serenity;
                var w0 = s.DecimalEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.StringEditor;
                var w3 = s.DateEditor;

                Q.initFormType(SuppKeyAcctTargetForm, [
                    'CompanyCd', w0,
                    'Year', w1,
                    'KeyAcctLink', w2,
                    'AccountType', w2,
                    'LoadDt', w3,
                    'CcfTargetQ1', w0,
                    'PrctTargetQ1', w0,
                    'CcfTargetQ12', w0,
                    'PrctTargetQ12', w0,
                    'CcfTargetQ13', w0,
                    'PrctTargetQ13', w0,
                    'CcfTargetQ14', w0,
                    'PrctTargetQ14', w0,
                    'CcfTargetQ15', w0,
                    'PrctTargetQ15', w0,
                    'CcfTargetQ2', w0,
                    'PrctTargetQ2', w0,
                    'CcfTargetQ22', w0,
                    'PrctTargetQ22', w0,
                    'CcfTargetQ23', w0,
                    'PrctTargetQ23', w0,
                    'CcfTargetQ24', w0,
                    'PrctTargetQ24', w0,
                    'CcfTargetQ25', w0,
                    'PrctTargetQ25', w0,
                    'CcfTargetQ3', w0,
                    'PrctTargetQ3', w0,
                    'CcfTargetQ32', w0,
                    'PrctTargetQ32', w0,
                    'CcfTargetQ33', w0,
                    'PrctTargetQ33', w0,
                    'CcfTargetQ34', w0,
                    'PrctTargetQ34', w0,
                    'CcfTargetQ35', w0,
                    'PrctTargetQ35', w0,
                    'CcfTargetQ4', w0,
                    'PrctTargetQ4', w0,
                    'CcfTargetQ42', w0,
                    'PrctTargetQ42', w0,
                    'CcfTargetQ43', w0,
                    'PrctTargetQ43', w0,
                    'CcfTargetQ44', w0,
                    'PrctTargetQ44', w0,
                    'CcfTargetQ45', w0,
                    'PrctTargetQ45', w0
                ]);
            }
        }
    }
}

