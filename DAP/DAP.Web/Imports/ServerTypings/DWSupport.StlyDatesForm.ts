namespace DAP.DWSupport {
    export interface StlyDatesForm {
        ReportDt: Serenity.DateEditor;
        DataAsOfDt: Serenity.DateEditor;
        StlyDt: Serenity.DateEditor;
        DayOfWeek: Serenity.StringEditor;
        WeekNum: Serenity.IntegerEditor;
        SystemIssuesInd: Serenity.BooleanEditor;
        HolidayInd: Serenity.BooleanEditor;
        DisasterInd: Serenity.BooleanEditor;
        EffectiveFrom: Serenity.DateEditor;
        EffectiveTo: Serenity.DateEditor;
        LoadDt: Serenity.DateEditor;
    }

    export class StlyDatesForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.StlyDates';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!StlyDatesForm.init)  {
                StlyDatesForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.StringEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(StlyDatesForm, [
                    'ReportDt', w0,
                    'DataAsOfDt', w0,
                    'StlyDt', w0,
                    'DayOfWeek', w1,
                    'WeekNum', w2,
                    'SystemIssuesInd', w3,
                    'HolidayInd', w3,
                    'DisasterInd', w3,
                    'EffectiveFrom', w0,
                    'EffectiveTo', w0,
                    'LoadDt', w0
                ]);
            }
        }
    }
}

