
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

        export namespace Fields {
            export declare const CompanyCd;
            export declare const AccountingYear;
            export declare const ChannelSummDesc;
            export declare const ChannelDesc;
            export declare const NtrBudget;
            export declare const PdsBudgetTotal;
            export declare const NpdBudget;
            export declare const BudgetbychannelTk;
        }

        [
            'CompanyCd',
            'AccountingYear',
            'ChannelSummDesc',
            'ChannelDesc',
            'NtrBudget',
            'PdsBudgetTotal',
            'NpdBudget',
            'BudgetbychannelTk'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}