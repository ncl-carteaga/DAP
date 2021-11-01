namespace DAP.PCHODSNVS {
    export interface GsaDistributionListForm {
        CompanyCd: Serenity.StringEditor;
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
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;

                Q.initFormType(GsaDistributionListForm, [
                    'CompanyCd', w0,
                    'AgencyCd', w1,
                    'AccountName', w0,
                    'ContactName', w0,
                    'Email', w0,
                    'LoadDt', w2
                ]);
            }
        }
    }
}

