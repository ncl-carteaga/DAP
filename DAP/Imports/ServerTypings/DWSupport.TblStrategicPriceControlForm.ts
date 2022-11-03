namespace DAP.DWSupport {
    export interface TblStrategicPriceControlForm {
        SailId: Serenity.StringEditor;
        CategoryCd: Serenity.StringEditor;
        EffectiveFromDat: Serenity.DateEditor;
        EffectiveToDat: Serenity.DateEditor;
        DiscPct: Serenity.IntegerEditor;
        CreatedDat: Serenity.DateEditor;
        CreatedByNam: Serenity.StringEditor;
        ModifiedDat: Serenity.DateEditor;
        ModifiedByNam: Serenity.StringEditor;
    }

    export class TblStrategicPriceControlForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.TblStrategicPriceControl';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TblStrategicPriceControlForm.init)  {
                TblStrategicPriceControlForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(TblStrategicPriceControlForm, [
                    'SailId', w0,
                    'CategoryCd', w0,
                    'EffectiveFromDat', w1,
                    'EffectiveToDat', w1,
                    'DiscPct', w2,
                    'CreatedDat', w1,
                    'CreatedByNam', w0,
                    'ModifiedDat', w1,
                    'ModifiedByNam', w0
                ]);
            }
        }
    }
}

