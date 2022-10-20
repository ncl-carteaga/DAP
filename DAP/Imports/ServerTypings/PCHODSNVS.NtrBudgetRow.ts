namespace DAP.PCHODSNVS {
    export interface NtrBudgetRow {
        CompanyCd?: string;
        AccountPeriodNum?: string;
        NtrBudget?: number;
        PdsBudgetTotal?: number;
        ApcdFinal?: number;
        NtrFinancialBudget?: number;
        BudgetTk?: number;
    }

    export namespace NtrBudgetRow {
        export const idProperty = 'BudgetTk';
        export const nameProperty = 'CompanyCd';
        export const localTextPrefix = 'PCHODSNVS.NtrBudget';

        export declare const enum Fields {
            CompanyCd = "CompanyCd",
            AccountPeriodNum = "AccountPeriodNum",
            NtrBudget = "NtrBudget",
            PdsBudgetTotal = "PdsBudgetTotal",
            ApcdFinal = "ApcdFinal",
            NtrFinancialBudget = "NtrFinancialBudget",
            BudgetTk = "BudgetTk"
        }
    }
}

