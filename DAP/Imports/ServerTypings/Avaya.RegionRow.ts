namespace DAP.Avaya {
    export interface RegionRow {
        RegionTk?: number;
        Region?: string;
    }

    export namespace RegionRow {
        export const idProperty = 'Region';
        export const nameProperty = 'Region';
        export const localTextPrefix = 'Avaya.Region';
        export const lookupKey = 'Avaya.Region';

        export function getLookup(): Q.Lookup<RegionRow> {
            return Q.getLookup<RegionRow>('Avaya.Region');
        }

        export declare const enum Fields {
            RegionTk = "RegionTk",
            Region = "Region"
        }
    }
}

