
namespace DAP.PCHDW {
    export interface DimCompanyRow {
        CompanyTk?: number;
        CompanyCd?: string;
        CompanyNm?: string;
        OutboundReportInd?: string;
    }

    export namespace DimCompanyRow {
        export const idProperty = 'CompanyTk';
        export const nameProperty = 'CompanyCd';
        export const localTextPrefix = 'PCHDW.DimCompany';

        export namespace Fields {
            export declare const CompanyTk;
            export declare const CompanyCd;
            export declare const CompanyNm;
            export declare const OutboundReportInd;
        }

        [
            'CompanyTk',
            'CompanyCd',
            'CompanyNm',
            'OutboundReportInd'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}