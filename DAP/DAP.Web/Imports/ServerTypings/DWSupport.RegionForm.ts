namespace DAP.DWSupport {
    export interface RegionForm {
        RegionCd: Serenity.StringEditor;
        RegionType: Serenity.StringEditor;
        CompanyCd: Serenity.StringEditor;
        EffectiveFrom: Serenity.DateEditor;
        EffectiveTo: Serenity.DateEditor;
        LoadDt: Serenity.DateEditor;
    }

    export class RegionForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.Region';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RegionForm.init)  {
                RegionForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;

                Q.initFormType(RegionForm, [
                    'RegionCd', w0,
                    'RegionType', w0,
                    'CompanyCd', w0,
                    'EffectiveFrom', w1,
                    'EffectiveTo', w1,
                    'LoadDt', w1
                ]);
            }
        }
    }
}

