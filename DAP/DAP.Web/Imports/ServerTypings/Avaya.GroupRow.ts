namespace DAP.Avaya {
    export interface GroupRow {
        Tk?: number;
        Cd?: string;
    }

    export namespace GroupRow {
        export const idProperty = 'Cd';
        export const nameProperty = 'Cd';
        export const localTextPrefix = 'Avaya.Group';
        export const lookupKey = 'Avaya.Group';

        export function getLookup(): Q.Lookup<GroupRow> {
            return Q.getLookup<GroupRow>('Avaya.Group');
        }

        export declare const enum Fields {
            Tk = "Tk",
            Cd = "Cd"
        }
    }
}

