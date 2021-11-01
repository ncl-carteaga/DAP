namespace DAP.Avaya {
    export interface CallTypeRow {
        TypeTk?: number;
        Type?: string;
    }

    export namespace CallTypeRow {
        export const idProperty = 'Type';
        export const nameProperty = 'Type';
        export const localTextPrefix = 'Avaya.CallType';
        export const lookupKey = 'Avaya.Call_Type';

        export function getLookup(): Q.Lookup<CallTypeRow> {
            return Q.getLookup<CallTypeRow>('Avaya.Call_Type');
        }

        export declare const enum Fields {
            TypeTk = "TypeTk",
            Type = "Type"
        }
    }
}

