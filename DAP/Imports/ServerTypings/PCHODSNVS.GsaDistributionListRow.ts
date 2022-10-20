namespace DAP.PCHODSNVS {
    export interface GsaDistributionListRow {
        GsaDistributionListTk?: number;
        CompanyCd?: string;
        AgencyCd?: string;
        AccountName?: string;
        ContactName?: string;
        Email?: string;
        LoadDt?: string;
    }

    export namespace GsaDistributionListRow {
        export const idProperty = 'GsaDistributionListTk';
        export const nameProperty = 'CompanyCd';
        export const localTextPrefix = 'PCHODSNVS.GsaDistributionList';

        export declare const enum Fields {
            GsaDistributionListTk = "GsaDistributionListTk",
            CompanyCd = "CompanyCd",
            AgencyCd = "AgencyCd",
            AccountName = "AccountName",
            ContactName = "ContactName",
            Email = "Email",
            LoadDt = "LoadDt"
        }
    }
}

