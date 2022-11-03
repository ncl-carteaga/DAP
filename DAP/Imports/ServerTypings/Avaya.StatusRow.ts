namespace DAP.Avaya {
    export interface StatusRow {
        StatusTk?: number;
        StatusDesc?: string;
    }

    export namespace StatusRow {
        export const idProperty = 'StatusDesc';
        export const nameProperty = 'StatusDesc';
        export const localTextPrefix = 'Avaya.Status';
        export const lookupKey = 'Avaya.Status';

        export function getLookup(): Q.Lookup<StatusRow> {
            return Q.getLookup<StatusRow>('Avaya.Status');
        }

        export declare const enum Fields {
            StatusTk = "StatusTk",
            StatusDesc = "StatusDesc"
        }
    }
}

