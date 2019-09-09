namespace DAP.PCHODSNVS {
    export interface NtrIntlDatelineCruisesRow {
        CruiseIntlTk?: number;
        CompanyCd?: string;
        CruiseSegmentCd?: string;
        CruiseDaysQty?: number;
        CruiseCalendarDaysQty?: number;
        LoadDt?: string;
    }

    export namespace NtrIntlDatelineCruisesRow {
        export const idProperty = 'CruiseIntlTk';
        export const nameProperty = 'CompanyCd';
        export const localTextPrefix = 'PCHODSNVS.NtrIntlDatelineCruises';

        export declare const enum Fields {
            CruiseIntlTk = "CruiseIntlTk",
            CompanyCd = "CompanyCd",
            CruiseSegmentCd = "CruiseSegmentCd",
            CruiseDaysQty = "CruiseDaysQty",
            CruiseCalendarDaysQty = "CruiseCalendarDaysQty",
            LoadDt = "LoadDt"
        }
    }
}

