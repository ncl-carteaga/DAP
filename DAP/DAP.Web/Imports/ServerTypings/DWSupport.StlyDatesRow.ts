namespace DAP.DWSupport {
    export interface StlyDatesRow {
        Stlyid?: number;
        ReportDt?: string;
        DataAsOfDt?: string;
        StlyDt?: string;
        DayOfWeek?: string;
        WeekNum?: number;
        SystemIssuesInd?: boolean;
        HolidayInd?: boolean;
        DisasterInd?: boolean;
        EffectiveFrom?: string;
        EffectiveTo?: string;
        LoadDt?: string;
    }

    export namespace StlyDatesRow {
        export const idProperty = 'Stlyid';
        export const nameProperty = 'DayOfWeek';
        export const localTextPrefix = 'DWSupport.StlyDates';

        export declare const enum Fields {
            Stlyid = "Stlyid",
            ReportDt = "ReportDt",
            DataAsOfDt = "DataAsOfDt",
            StlyDt = "StlyDt",
            DayOfWeek = "DayOfWeek",
            WeekNum = "WeekNum",
            SystemIssuesInd = "SystemIssuesInd",
            HolidayInd = "HolidayInd",
            DisasterInd = "DisasterInd",
            EffectiveFrom = "EffectiveFrom",
            EffectiveTo = "EffectiveTo",
            LoadDt = "LoadDt"
        }
    }
}

