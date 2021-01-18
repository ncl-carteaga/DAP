namespace DAP.PCHODSNVS {
    export interface NtrBudgetByChannelRow {
        CompanyCd?: string;
        AccountingYear?: number;
        ChannelSummDesc?: string;
        ChannelDesc?: string;
        NtrBudget?: number;
        PdsBudgetTotal?: number;
        NpdBudget?: number;
        BudgetbychannelTk?: number;
    }

    export namespace NtrBudgetByChannelRow {
        export const idProperty = 'BudgetbychannelTk';
        export const nameProperty = 'CompanyCd';
        export const localTextPrefix = 'PCHODSNVS.NtrBudgetByChannel';

        export declare const enum Fields {
            CompanyCd = "CompanyCd",
            AccountingYear = "AccountingYear",
            ChannelSummDesc = "ChannelSummDesc",
            ChannelDesc = "ChannelDesc",
            NtrBudget = "NtrBudget",
            PdsBudgetTotal = "PdsBudgetTotal",
            NpdBudget = "NpdBudget",
            BudgetbychannelTk = "BudgetbychannelTk"
        }
    }
}

