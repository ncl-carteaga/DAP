namespace DAP.PCHODSNVS {
    export interface ItemTypeRow {
        TypeTk?: number;
        Type?: string;
    }

    export namespace ItemTypeRow {
        export const idProperty = 'Type';
        export const nameProperty = 'Type';
        export const localTextPrefix = 'PCHODSNVS.ItemType';
        export const lookupKey = 'PCHODSNVS.Item_Type';

        export function getLookup(): Q.Lookup<ItemTypeRow> {
            return Q.getLookup<ItemTypeRow>('PCHODSNVS.Item_Type');
        }

        export declare const enum Fields {
            TypeTk = "TypeTk",
            Type = "Type"
        }
    }
}

