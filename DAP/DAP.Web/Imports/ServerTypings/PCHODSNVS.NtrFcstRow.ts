
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

        export namespace Fields {
            export declare const CompanyCd;
            export declare const AccountPeriodNum;
            export declare const NtrFcst;
            export declare const PdsFcstTotal;
            export declare const ApcdFinal;
            export declare const NtrFinancialBudget;
            export declare const FcstTk;
        }

        [
            'CompanyCd',
            'AccountPeriodNum',
            'NtrFcst',
            'PdsFcstTotal',
            'ApcdFinal',
            'NtrFinancialBudget',
            'FcstTk'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}