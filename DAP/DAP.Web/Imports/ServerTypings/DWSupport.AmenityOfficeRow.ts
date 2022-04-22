namespace DAP.DWSupport {
    export interface AmenityOfficeRow {
        Cd?: string;
    }

    export namespace AmenityOfficeRow {
        export const idProperty = 'Cd';
        export const nameProperty = 'Cd';
        export const localTextPrefix = 'DWSupport.AmenityOffice';
        export const lookupKey = 'DWSupport.AmenityOffice';

        export function getLookup(): Q.Lookup<AmenityOfficeRow> {
            return Q.getLookup<AmenityOfficeRow>('DWSupport.AmenityOffice');
        }

        export declare const enum Fields {
            Cd = "Cd"
        }
    }
}

