namespace DAP.PCHODSNVS {
    export interface RevenueAdhocManagementRow {
        Key?: number;
        DatabaseId?: string;
        CubeId?: string;
        AdhocDate?: string;
        AdhocDateTk?: number;
        LastUpdatedBy?: string;
        SqlJobName?: string;
        LastProcessedDateTime?: string;
        CompanyCd?: string;
    }

    export namespace RevenueAdhocManagementRow {
        export const idProperty = 'Key';
        export const nameProperty = 'DatabaseId';
        export const localTextPrefix = 'PCHODSNVS.RevenueAdhocManagement';

        export declare const enum Fields {
            Key = "Key",
            DatabaseId = "DatabaseId",
            CubeId = "CubeId",
            AdhocDate = "AdhocDate",
            AdhocDateTk = "AdhocDateTk",
            LastUpdatedBy = "LastUpdatedBy",
            SqlJobName = "SqlJobName",
            LastProcessedDateTime = "LastProcessedDateTime",
            CompanyCd = "CompanyCd"
        }
    }
}

