namespace DAP.Avaya {
    export interface BrandRow {
        BrandTk?: number;
        Brand?: string;
    }

    export namespace BrandRow {
        export const idProperty = 'Brand';
        export const nameProperty = 'Brand';
        export const localTextPrefix = 'Avaya.Brand';
        export const lookupKey = 'Avaya.Brand';

        export function getLookup(): Q.Lookup<BrandRow> {
            return Q.getLookup<BrandRow>('Avaya.Brand');
        }

        export declare const enum Fields {
            BrandTk = "BrandTk",
            Brand = "Brand"
        }
    }
}

