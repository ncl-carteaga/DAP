namespace DAP.PCHODS {
    export interface OutboundCommissionHistBrForm {
        CommissionId: Serenity.StringEditor;
        CompanyCd: Serenity.StringEditor;
        LowNumBookings: Serenity.DecimalEditor;
        HighNumBookings: Serenity.DecimalEditor;
        CommissionRate: Serenity.DecimalEditor;
        ActiveDt: Serenity.DateEditor;
        InactiveDt: Serenity.DateEditor;
    }

    export class OutboundCommissionHistBrForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODS.OutboundCommissionHistBr';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OutboundCommissionHistBrForm.init)  {
                OutboundCommissionHistBrForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.DateEditor;

                Q.initFormType(OutboundCommissionHistBrForm, [
                    'CommissionId', w0,
                    'CompanyCd', w0,
                    'LowNumBookings', w1,
                    'HighNumBookings', w1,
                    'CommissionRate', w1,
                    'ActiveDt', w2,
                    'InactiveDt', w2
                ]);
            }
        }
    }
}

