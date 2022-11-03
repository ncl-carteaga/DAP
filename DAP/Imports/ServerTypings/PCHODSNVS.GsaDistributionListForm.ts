namespace DAP.PCHODSNVS {
    export interface GsaDistributionListForm {
        CompanyCd: SelectPCHCompanyEditor;
        AgencyCd: Serenity.LookupEditor;
        AccountName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        LoadDt: Serenity.DateEditor;
    }

    export class GsaDistributionListForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODSNVS.GsaDistributionList';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!GsaDistributionListForm.init)  {
                GsaDistributionListForm.init = true;

                var s = Serenity;
                var w0 = SelectPCHCompanyEditor;
                var w1 = s.LookupEditor;
                var w2 = s.StringEditor;
                var w3 = s.DateEditor;

                Q.initFormType(GsaDistributionListForm, [
                    'CompanyCd', w0,
                    'AgencyCd', w1,
                    'AccountName', w2,
                    'ContactName', w2,
                    'Email', w2,
                    'LoadDt', w3
                ]);
            }
        }
    }
}

