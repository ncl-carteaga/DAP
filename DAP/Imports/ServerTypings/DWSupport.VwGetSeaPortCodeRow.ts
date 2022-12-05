namespace DAP.DWSupport {
    export interface VwGetSeaPortCodeRow {
        PortCode?: string;
        PortName?: string;
        CountryCode?: string;
    }

    export namespace VwGetSeaPortCodeRow {
        export const idProperty = 'PortCode';
        export const nameProperty = 'PortCode';
        export const localTextPrefix = 'DWSupport.VwGetSeaPortCode';
        export const lookupKey = 'DWSupport.GetPortNames';

        export function getLookup(): Q.Lookup<VwGetSeaPortCodeRow> {
            return Q.getLookup<VwGetSeaPortCodeRow>('DWSupport.GetPortNames');
        }

        export declare const enum Fields {
            PortCode = "PortCode",
            PortName = "PortName",
            CountryCode = "CountryCode"
        }
    }
}

