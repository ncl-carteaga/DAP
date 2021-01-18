namespace DAP.PCHODSNVS {
    export interface NtrPastMonthsActualForm {
        CompanyCd: Serenity.StringEditor;
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
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(NtrPastMonthsActualForm, [
                    'CompanyCd', w0,
                    'YearMonth', w0,
                    'NtrFinal', w1,
                    'CxRev', w1,
                    'PdsFinalTotal', w1,
                    'ApcdFinal', w1,
                    'BookedNumOfCabins', w1,
                    'AvailableNumOfCabins', w1,
                    'StlyBookedNumOfCabins', w1,
                    'StlyAvailableNumOfCabins', w1
                ]);
            }
        }
    }
}

