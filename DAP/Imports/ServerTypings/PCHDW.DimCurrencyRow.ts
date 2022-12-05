namespace DAP.PCHDW {
    export interface DimCurrencyRow {
        Tk?: number;
        Cd?: string;
        Desc?: string;
    }

    export namespace DimCurrencyRow {
        export const idProperty = 'Cd';
        export const nameProperty = 'Cd';
        export const localTextPrefix = 'PCHDW.DimCurrency';
        export const lookupKey = 'PCHDW.Currency';

        export function getLookup(): Q.Lookup<DimCurrencyRow> {
            return Q.getLookup<DimCurrencyRow>('PCHDW.Currency');
        }

        export declare const enum Fields {
            Tk = "Tk",
            Cd = "Cd",
            Desc = "Desc"
        }
    }
}

