namespace DAP.PCHODS {
    export interface SelectCompanyForm {
        CompanyCd: SelectCompanyEditor;
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

                Q.initFormType(SelectCompanyForm, [
                    'CompanyCd', w0
                ]);
            }
        }
    }
}

