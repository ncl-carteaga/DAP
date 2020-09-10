namespace DAP.NCLHDSAR {
    export interface RequestStatusRow {
        StatusId?: number;
        StatusDescription?: string;
        StatusOrder?: number;
    }

    export namespace RequestStatusRow {
        export const idProperty = 'StatusId';
        export const nameProperty = 'StatusDescription';
        export const localTextPrefix = 'NCLHDSAR.RequestStatus';
        export const lookupKey = 'NCLHDSAR.RequestStatus';

        export function getLookup(): Q.Lookup<RequestStatusRow> {
            return Q.getLookup<RequestStatusRow>('NCLHDSAR.RequestStatus');
        }

        export declare const enum Fields {
            StatusId = "StatusId",
            StatusDescription = "StatusDescription",
            StatusOrder = "StatusOrder"
        }
    }
}

