namespace DAP.PCHODS {
    export interface OutboundCommissionHistForm {
        CommissionId: Serenity.StringEditor;
        CompanyCd: CompanyEditor;
        LowNumBookings: Serenity.DecimalEditor;
        HighNumBookings: Serenity.DecimalEditor;
        CommissionRate: Serenity.DecimalEditor;
        ActiveDt: Serenity.DateEditor;
        InactiveDt: Serenity.DateEditor;
    }

    export class OutboundCommissionHistForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODS.OutboundCommissionHist';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OutboundCommissionHistForm.init)  {
                OutboundCommissionHistForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = CompanyEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.DateEditor;

                Q.initFormType(OutboundCommissionHistForm, [
                    'CommissionId', w0,
                    'CompanyCd', w1,
                    'LowNumBookings', w2,
                    'HighNumBookings', w2,
                    'CommissionRate', w2,
                    'ActiveDt', w3,
                    'InactiveDt', w3
                ]);
            }
        }
    }
}

