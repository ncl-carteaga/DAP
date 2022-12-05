namespace DAP.PCHODSNVS {
    export interface NtrFcstRow {
        CompanyCd?: string;
        AccountPeriodNum?: string;
        NtrFcst?: number;
        PdsFcstTotal?: number;
        ApcdFinal?: number;
        NtrFinancialBudget?: number;
        FcstTk?: number;
    }

    export namespace NtrFcstRow {
        export const idProperty = 'FcstTk';
        export const nameProperty = 'CompanyCd';
        export const localTextPrefix = 'PCHODSNVS.NtrFcst';

        export declare const enum Fields {
            CompanyCd = "CompanyCd",
            AccountPeriodNum = "AccountPeriodNum",
            NtrFcst = "NtrFcst",
            PdsFcstTotal = "PdsFcstTotal",
            ApcdFinal = "ApcdFinal",
            NtrFinancialBudget = "NtrFinancialBudget",
            FcstTk = "FcstTk"
        }
    }
}

