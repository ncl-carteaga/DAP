namespace DAP.PCHODS {
    export interface SelectCompanyForm {
        CompanyCd: SelectCompanyEditor;
        EffectiveDt: Serenity.DateEditor;
    }

    export class SelectCompanyForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODS.SelectCompany';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SelectCompanyForm.init)  {
                SelectCompanyForm.init = true;

                var s = Serenity;
                var w0 = SelectCompanyEditor;
                var w1 = s.DateEditor;

                Q.initFormType(SelectCompanyForm, [
                    'CompanyCd', w0,
                    'EffectiveDt', w1
                ]);
            }
        }
    }
}

