namespace DAP.DWSupport {
    export interface UpgradeAdvAdjSuppForm {
        UpgradeAmountMin: Serenity.DecimalEditor;
        UpgradeAmountMax: Serenity.DecimalEditor;
        CommissionPercent: Serenity.DecimalEditor;
        EffectiveFromDt: Serenity.DateEditor;
        EffectiveToDt: Serenity.DateEditor;
        CreatedTs: Serenity.DateEditor;
        CreatedByName: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
        ModifiedByName: Serenity.StringEditor;
    }

    export class UpgradeAdvAdjSuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.UpgradeAdvAdjSupp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UpgradeAdvAdjSuppForm.init)  {
                UpgradeAdvAdjSuppForm.init = true;

                var s = Serenity;
                var w0 = s.DecimalEditor;
                var w1 = s.DateEditor;
                var w2 = s.StringEditor;

                Q.initFormType(UpgradeAdvAdjSuppForm, [
                    'UpgradeAmountMin', w0,
                    'UpgradeAmountMax', w0,
                    'CommissionPercent', w0,
                    'EffectiveFromDt', w1,
                    'EffectiveToDt', w1,
                    'CreatedTs', w1,
                    'CreatedByName', w2,
                    'ModifiedTs', w1,
                    'ModifiedByName', w2
                ]);
            }
        }
    }
}

