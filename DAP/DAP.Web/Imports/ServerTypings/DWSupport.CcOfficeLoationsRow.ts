namespace DAP.DWSupport {
    export interface CcOfficeLoationsRow {
        Cd?: string;
    }

    export namespace CcOfficeLoationsRow {
        export const idProperty = 'Cd';
        export const nameProperty = 'Cd';
        export const localTextPrefix = 'DWSupport.CcOfficeLoations';
        export const lookupKey = 'DWSupport.CCOffice';

        export function getLookup(): Q.Lookup<CcOfficeLoationsRow> {
            return Q.getLookup<CcOfficeLoationsRow>('DWSupport.CCOffice');
        }

        export declare const enum Fields {
            Cd = "Cd"
        }
    }
}

