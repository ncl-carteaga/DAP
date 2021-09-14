namespace DAP.PCHDW {
    export interface RevenueAdhocManagementRow {
        Key?: number;
        DatabaseId?: string;
        CubeId?: string;
        AdhocDate?: string;
        AdhocDateTk?: number;
        LastUpdatedBy?: string;
        SqlJobName?: string;
        LastProcessedDateTime?: string;
    }

    export namespace RevenueAdhocManagementRow {
        export const idProperty = 'Key';
        export const nameProperty = 'DatabaseId';
        export const localTextPrefix = 'PCHDW.RevenueAdhocManagement';

        export declare const enum Fields {
            Key = "Key",
            DatabaseId = "DatabaseId",
            CubeId = "CubeId",
            AdhocDate = "AdhocDate",
            AdhocDateTk = "AdhocDateTk",
            LastUpdatedBy = "LastUpdatedBy",
            SqlJobName = "SqlJobName",
            LastProcessedDateTime = "LastProcessedDateTime"
        }
    }
}

