namespace DAP.PCHODSNVS {
    export interface NtrIntlDatelineCruisesForm {
        CompanyCd: SelectPCHCompanyEditor;
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
                var w0 = SelectPCHCompanyEditor;
                var w1 = s.StringEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DateEditor;

                Q.initFormType(NtrIntlDatelineCruisesForm, [
                    'CompanyCd', w0,
                    'CruiseSegmentCd', w1,
                    'CruiseDaysQty', w2,
                    'CruiseCalendarDaysQty', w2,
                    'LoadDt', w3
                ]);
            }
        }
    }
}

