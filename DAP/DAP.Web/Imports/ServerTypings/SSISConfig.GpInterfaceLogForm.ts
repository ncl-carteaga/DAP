namespace DAP.SSISConfig {
    export interface GpInterfaceLogForm {
        CompanyCd: PCHODS.CompanyEditor;
        CruiseSegmentCd: Serenity.StringEditor;
        ExpRevType: Serenity.StringEditor;
        GpInterfaceInd: Serenity.StringEditor;
        GpInterfacedDt: Serenity.DateEditor;
        JournalNum: Serenity.IntegerEditor;
    }

    export class GpInterfaceLogForm extends Serenity.PrefixedContext {
        static formKey = 'SSISConfig.GpInterfaceLog';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!GpInterfaceLogForm.init)  {
                GpInterfaceLogForm.init = true;

                var s = Serenity;
                var w0 = PCHODS.CompanyEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;
                var w3 = s.IntegerEditor;

                Q.initFormType(GpInterfaceLogForm, [
                    'CompanyCd', w0,
                    'CruiseSegmentCd', w1,
                    'ExpRevType', w1,
                    'GpInterfaceInd', w1,
                    'GpInterfacedDt', w2,
                    'JournalNum', w3
                ]);
            }
        }
    }
}

