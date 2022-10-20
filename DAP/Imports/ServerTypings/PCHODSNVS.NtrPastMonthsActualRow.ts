namespace DAP.PCHODSNVS {
    export interface NtrPastMonthsActualRow {
        CompanyCd?: string;
        YearMonth?: string;
        NtrFinal?: number;
        CxRev?: number;
        PdsFinalTotal?: number;
        ApcdFinal?: number;
        BookedNumOfCabins?: number;
        AvailableNumOfCabins?: number;
        StlyBookedNumOfCabins?: number;
        StlyAvailableNumOfCabins?: number;
        PastmonthactualTk?: number;
    }

    export namespace NtrPastMonthsActualRow {
        export const idProperty = 'PastmonthactualTk';
        export const nameProperty = 'CompanyCd';
        export const localTextPrefix = 'PCHODSNVS.NtrPastMonthsActual';

        export declare const enum Fields {
            CompanyCd = "CompanyCd",
            YearMonth = "YearMonth",
            NtrFinal = "NtrFinal",
            CxRev = "CxRev",
            PdsFinalTotal = "PdsFinalTotal",
            ApcdFinal = "ApcdFinal",
            BookedNumOfCabins = "BookedNumOfCabins",
            AvailableNumOfCabins = "AvailableNumOfCabins",
            StlyBookedNumOfCabins = "StlyBookedNumOfCabins",
            StlyAvailableNumOfCabins = "StlyAvailableNumOfCabins",
            PastmonthactualTk = "PastmonthactualTk"
        }
    }
}

