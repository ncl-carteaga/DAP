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

        export declare const enum Fields {
            CompanyTk = "CompanyTk",
            CompanyCd = "CompanyCd",
            CompanyNm = "CompanyNm",
            OutboundReportInd = "OutboundReportInd"
        }
    }
}

