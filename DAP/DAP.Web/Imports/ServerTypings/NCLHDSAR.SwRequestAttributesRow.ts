namespace DAP.NCLHDSAR {
    export interface SwRequestAttributesRow {
        Id?: number;
        SystemMasterId?: number;
        RequestValue?: string;
        ResolvedDt?: string;
        ExtractDt?: string;
        RequestAttributeId?: number;
        LastUpdated?: string;
        SystemMasterSystemDesc?: string;
    }

    export namespace SwRequestAttributesRow {
        export const idProperty = 'RequestAttributeId';
        export const nameProperty = 'RequestValue';
        export const localTextPrefix = 'NCLHDSAR.SwRequestAttributes';

        export declare const enum Fields {
            Id = "Id",
            SystemMasterId = "SystemMasterId",
            RequestValue = "RequestValue",
            ResolvedDt = "ResolvedDt",
            ExtractDt = "ExtractDt",
            RequestAttributeId = "RequestAttributeId",
            LastUpdated = "LastUpdated",
            SystemMasterSystemDesc = "SystemMasterSystemDesc"
        }
    }
}

