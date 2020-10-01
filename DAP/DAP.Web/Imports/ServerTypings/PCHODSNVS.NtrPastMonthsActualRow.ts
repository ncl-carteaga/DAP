
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

        export namespace Fields {
            export declare const CompanyCd;
            export declare const YearMonth;
            export declare const NtrFinal;
            export declare const CxRev;
            export declare const PdsFinalTotal;
            export declare const ApcdFinal;
            export declare const BookedNumOfCabins;
            export declare const AvailableNumOfCabins;
            export declare const StlyBookedNumOfCabins;
            export declare const StlyAvailableNumOfCabins;
            export declare const PastmonthactualTk;
        }

        [
            'CompanyCd',
            'YearMonth',
            'NtrFinal',
            'CxRev',
            'PdsFinalTotal',
            'ApcdFinal',
            'BookedNumOfCabins',
            'AvailableNumOfCabins',
            'StlyBookedNumOfCabins',
            'StlyAvailableNumOfCabins',
            'PastmonthactualTk'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}