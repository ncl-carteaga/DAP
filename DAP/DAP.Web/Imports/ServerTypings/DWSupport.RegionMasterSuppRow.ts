
namespace DAP.DWSupport {
    export interface RegionMasterSuppRow {
        RegionSurKey?: number;
        RegionCd?: string;
        ResponsibilityDesc?: string;
        SalesrepUserId?: string;
        CreatedByNam?: string;
        CreatedTs?: string;
        ModifiedByNam?: string;
        ModifiedTs?: string;
    }

    export namespace RegionMasterSuppRow {
        export const idProperty = 'RegionSurKey';
        export const nameProperty = 'RegionCd';
        export const localTextPrefix = 'DWSupport.RegionMasterSupp';

        export namespace Fields {
            export declare const RegionSurKey;
            export declare const RegionCd;
            export declare const ResponsibilityDesc;
            export declare const SalesrepUserId;
            export declare const CreatedByNam;
            export declare const CreatedTs;
            export declare const ModifiedByNam;
            export declare const ModifiedTs;
        }

        [
            'RegionSurKey',
            'RegionCd',
            'ResponsibilityDesc',
            'SalesrepUserId',
            'CreatedByNam',
            'CreatedTs',
            'ModifiedByNam',
            'ModifiedTs'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}