namespace DAP.PCHDW {
    export interface DimOfficeRow {
        Tk?: number;
        Cd?: string;
        Desc?: string;
    }

    export namespace DimOfficeRow {
        export const idProperty = 'Tk';
        export const nameProperty = 'Desc';
        export const localTextPrefix = 'PCHDW.DimOffice';
        export const lookupKey = 'PCHDW.DimOffice';

        export function getLookup(): Q.Lookup<DimOfficeRow> {
            return Q.getLookup<DimOfficeRow>('PCHDW.DimOffice');
        }

        export declare const enum Fields {
            Tk = "Tk",
            Cd = "Cd",
            Desc = "Desc"
        }
    }
}

