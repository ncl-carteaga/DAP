namespace DAP.DWSupport {
    export interface MasterComponentRow {
        MasterComponentCd?: string;
    }

    export namespace MasterComponentRow {
        export const idProperty = 'MasterComponentCd';
        export const nameProperty = 'MasterComponentCd';
        export const localTextPrefix = 'DWSupport.MasterComponent';
        export const lookupKey = 'DWSupport.GetMasterComponent';

        export function getLookup(): Q.Lookup<MasterComponentRow> {
            return Q.getLookup<MasterComponentRow>('DWSupport.GetMasterComponent');
        }

        export declare const enum Fields {
            MasterComponentCd = "MasterComponentCd"
        }
    }
}

