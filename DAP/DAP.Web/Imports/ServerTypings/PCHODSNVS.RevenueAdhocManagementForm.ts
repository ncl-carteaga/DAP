namespace DAP.PCHODSNVS {
    export interface RevenueAdhocManagementForm {
        DatabaseId: Serenity.StringEditor;
        CubeId: Serenity.StringEditor;
        CompanyCd: SelectPCHCompanyEditor;
        AdhocDate: Serenity.DateEditor;
        AdhocDateTk: Serenity.IntegerEditor;
        SqlJobName: Serenity.StringEditor;
        LastProcessedDateTime: Serenity.DateEditor;
    }

    export class RevenueAdhocManagementForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODSNVS.RevenueAdhocManagement';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RevenueAdhocManagementForm.init)  {
                RevenueAdhocManagementForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = SelectPCHCompanyEditor;
                var w2 = s.DateEditor;
                var w3 = s.IntegerEditor;

                Q.initFormType(RevenueAdhocManagementForm, [
                    'DatabaseId', w0,
                    'CubeId', w0,
                    'CompanyCd', w1,
                    'AdhocDate', w2,
                    'AdhocDateTk', w3,
                    'SqlJobName', w0,
                    'LastProcessedDateTime', w2
                ]);
            }
        }
    }
}

