namespace DAP.PCHDW {
    export interface RevenueAdhocManagementForm {
        DatabaseId: Serenity.StringEditor;
        CubeId: Serenity.StringEditor;
        MeasuregroupId: Serenity.StringEditor;
        AdhocDate: Serenity.DateEditor;
        AdhocDateTk: Serenity.IntegerEditor;
        AdhocStlydate: Serenity.DateEditor;
        AdhocStlydateTk: Serenity.IntegerEditor;
        LastProcessedDateTime: Serenity.DateEditor;
    }

    export class RevenueAdhocManagementForm extends Serenity.PrefixedContext {
        static formKey = 'PCHDW.RevenueAdhocManagement';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RevenueAdhocManagementForm.init)  {
                RevenueAdhocManagementForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(RevenueAdhocManagementForm, [
                    'DatabaseId', w0,
                    'CubeId', w0,
                    'MeasuregroupId', w0,
                    'AdhocDate', w1,
                    'AdhocDateTk', w2,
                    'AdhocStlydate', w1,
                    'AdhocStlydateTk', w2,
                    'LastProcessedDateTime', w1
                ]);
            }
        }
    }
}

