namespace DAP.DWSupport {
    export interface AmenityCategoryRow {
        CategoryCd?: string;
    }

    export namespace AmenityCategoryRow {
        export const idProperty = 'CategoryCd';
        export const nameProperty = 'CategoryCd';
        export const localTextPrefix = 'DWSupport.AmenityCategory';
        export const lookupKey = 'DWSupport.AmenityCategory';

        export function getLookup(): Q.Lookup<AmenityCategoryRow> {
            return Q.getLookup<AmenityCategoryRow>('DWSupport.AmenityCategory');
        }

        export declare const enum Fields {
            CategoryCd = "CategoryCd"
        }
    }
}

