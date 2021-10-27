namespace DAP.PCHODSNVS {
    export interface NtrPastMonthsActualForm {
        CompanyCd: PCHODS.CompanyEditor;
        YearMonth: Serenity.StringEditor;
        NtrFinal: Serenity.DecimalEditor;
        CxRev: Serenity.DecimalEditor;
        PdsFinalTotal: Serenity.DecimalEditor;
        ApcdFinal: Serenity.DecimalEditor;
        BookedNumOfCabins: Serenity.DecimalEditor;
        AvailableNumOfCabins: Serenity.DecimalEditor;
        StlyBookedNumOfCabins: Serenity.DecimalEditor;
        StlyAvailableNumOfCabins: Serenity.DecimalEditor;
    }

    export class NtrPastMonthsActualForm extends Serenity.PrefixedContext {
        static formKey = 'PCHODSNVS.NtrPastMonthsActual';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!NtrPastMonthsActualForm.init)  {
                NtrPastMonthsActualForm.init = true;

                var s = Serenity;
                var w0 = PCHODS.CompanyEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(NtrPastMonthsActualForm, [
                    'CompanyCd', w0,
                    'YearMonth', w1,
                    'NtrFinal', w2,
                    'CxRev', w2,
                    'PdsFinalTotal', w2,
                    'ApcdFinal', w2,
                    'BookedNumOfCabins', w2,
                    'AvailableNumOfCabins', w2,
                    'StlyBookedNumOfCabins', w2,
                    'StlyAvailableNumOfCabins', w2
                ]);
            }
        }
    }
}

