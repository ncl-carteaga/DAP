namespace DAP.PCHODS {
    export interface OutboundCommissionHistAuForm {
        CommissionId: Serenity.StringEditor;
        CompanyCd: Serenity.StringEditor;
        LowNumBookings: Serenity.DecimalEditor;
        HighNumBookings: Serenity.DecimalEditor;
        CommissionRate: Serenity.DecimalEditor;
        ActiveDt: Serenity.DateEditor;
        InactiveDt: Serenity.DateEditor;
    }

    export class OutboundCommissionHistAuForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODS.OutboundCommissionHistAu';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OutboundCommissionHistAuForm.init)  {
                OutboundCommissionHistAuForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.DateEditor;

                Q.initFormType(OutboundCommissionHistAuForm, [
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

