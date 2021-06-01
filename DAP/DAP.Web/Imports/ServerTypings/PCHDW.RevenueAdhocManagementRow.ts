namespace DAP.PCHDW {
    export interface RevenueAdhocManagementRow {
        Key?: number;
        DatabaseId?: string;
        CubeId?: string;
        MeasuregroupId?: string;
        AdhocDate?: string;
        AdhocDateTk?: number;
        AdhocStlydate?: string;
        AdhocStlydateTk?: number;
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
            MeasuregroupId = "MeasuregroupId",
            AdhocDate = "AdhocDate",
            AdhocDateTk = "AdhocDateTk",
            AdhocStlydate = "AdhocStlydate",
            AdhocStlydateTk = "AdhocStlydateTk",
            LastProcessedDateTime = "LastProcessedDateTime"
        }
    }
}

