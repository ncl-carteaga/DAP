namespace DAP.DWSupport {
    export interface MinibarSetupSuppForm {
        ShipCd: Serenity.StringEditor;
        EffectiveDat: Serenity.DateEditor;
        MinibarSetupCostAmt: Serenity.DecimalEditor;
        CommentTxt: Serenity.StringEditor;
        CreatedByNam: Serenity.StringEditor;
        CreatedTs: Serenity.DateEditor;
        ModifiedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
    }

    export class MinibarSetupSuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.MinibarSetupSupp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MinibarSetupSuppForm.init)  {
                MinibarSetupSuppForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(MinibarSetupSuppForm, [
                    'ShipCd', w0,
                    'EffectiveDat', w1,
                    'MinibarSetupCostAmt', w2,
                    'CommentTxt', w0,
                    'CreatedByNam', w0,
                    'CreatedTs', w1,
                    'ModifiedByNam', w0,
                    'ModifiedTs', w1
                ]);
            }
        }
    }
}

