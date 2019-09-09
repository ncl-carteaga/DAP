namespace DAP.PCHODSNVS {
    export interface NtrIntlDatelineCruisesForm {
        CompanyCd: Serenity.StringEditor;
        CruiseSegmentCd: Serenity.StringEditor;
        CruiseDaysQty: Serenity.IntegerEditor;
        CruiseCalendarDaysQty: Serenity.IntegerEditor;
        LoadDt: Serenity.DateEditor;
    }

    export class NtrIntlDatelineCruisesForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODSNVS.NtrIntlDatelineCruises';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!NtrIntlDatelineCruisesForm.init)  {
                NtrIntlDatelineCruisesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(NtrIntlDatelineCruisesForm, [
                    'CompanyCd', w0,
                    'CruiseSegmentCd', w0,
                    'CruiseDaysQty', w1,
                    'CruiseCalendarDaysQty', w1,
                    'LoadDt', w2
                ]);
            }
        }
    }
}

