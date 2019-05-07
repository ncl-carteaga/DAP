namespace DAP.PCHODS {
    export interface OutboundCommissionPeriodForm {
        IsOpen: Serenity.BooleanEditor;
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        CurrentMonth: Serenity.DateEditor;
        PreviousMonth: Serenity.DateEditor;
    }

    export class OutboundCommissionPeriodForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODS.OutboundCommissionPeriod';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OutboundCommissionPeriodForm.init)  {
                OutboundCommissionPeriodForm.init = true;

                var s = Serenity;
                var w0 = s.BooleanEditor;
                var w1 = s.DateEditor;

                Q.initFormType(OutboundCommissionPeriodForm, [
                    'IsOpen', w0,
                    'StartDate', w1,
                    'EndDate', w1,
                    'CurrentMonth', w1,
                    'PreviousMonth', w1
                ]);
            }
        }
    }
}

