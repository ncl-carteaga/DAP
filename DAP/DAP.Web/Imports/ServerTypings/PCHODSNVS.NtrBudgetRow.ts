
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

        export namespace Fields {
            export declare const CompanyCd;
            export declare const AccountPeriodNum;
            export declare const NtrBudget;
            export declare const PdsBudgetTotal;
            export declare const ApcdFinal;
            export declare const NtrFinancialBudget;
            export declare const BudgetTk;
        }

        [
            'CompanyCd',
            'AccountPeriodNum',
            'NtrBudget',
            'PdsBudgetTotal',
            'ApcdFinal',
            'NtrFinancialBudget',
            'BudgetTk'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}