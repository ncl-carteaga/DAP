namespace DAP.PCHODS {
    export interface SelectCompanyAuForm {
        CompanyCd: SelectCompanyAUEditor;
        EffectiveDt: Serenity.DateEditor;
    }

    export class SelectCompanyAuForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODS.SelectCompanyAU';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SelectCompanyAuForm.init)  {
                SelectCompanyAuForm.init = true;

                var s = Serenity;
                var w0 = SelectCompanyAUEditor;
                var w1 = s.DateEditor;

                Q.initFormType(SelectCompanyAuForm, [
                    'CompanyCd', w0,
                    'EffectiveDt', w1
                ]);
            }
        }
    }
}

