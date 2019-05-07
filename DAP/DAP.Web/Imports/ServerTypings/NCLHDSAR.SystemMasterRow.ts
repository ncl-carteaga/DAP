namespace DAP.NCLHDSAR {
    export interface SystemMasterRow {
        Id?: number;
        SystemName?: string;
        SystemTable?: string;
        SystemDesc?: string;
        SystemActiveYn?: string;
    }

    export namespace SystemMasterRow {
        export const idProperty = 'Id';
        export const nameProperty = 'SystemName';
        export const localTextPrefix = 'NCLHDSAR.SystemMaster';
        export const lookupKey = 'NCLHDSAR.SystemMaster';

        export function getLookup(): Q.Lookup<SystemMasterRow> {
            return Q.getLookup<SystemMasterRow>('NCLHDSAR.SystemMaster');
        }

        export declare const enum Fields {
            Id = "Id",
            SystemName = "SystemName",
            SystemTable = "SystemTable",
            SystemDesc = "SystemDesc",
            SystemActiveYn = "SystemActiveYn"
        }
    }
}

