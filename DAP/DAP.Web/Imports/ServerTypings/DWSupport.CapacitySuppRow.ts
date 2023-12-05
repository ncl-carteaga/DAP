
namespace DAP.DWSupport {
    export interface CapacitySuppRow {
        CapacityId?: number;
        ShipCd?: string;
        DoCapacity?: number;
        CabinCapacity?: number;
        EffectiveFromDt?: string;
        EffectiveToDt?: string;
        SailStartDate?: string;
        SailEndDate?: string;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedTs?: string;
        ModifiedByNam?: string;
    }

    export namespace CapacitySuppRow {
        export const idProperty = 'CapacityId';
        export const nameProperty = 'ShipCd';
        export const localTextPrefix = 'DWSupport.CapacitySupp';

        export namespace Fields {
            export declare const CapacityId;
            export declare const ShipCd;
            export declare const DoCapacity;
            export declare const CabinCapacity;
            export declare const EffectiveFromDt;
            export declare const EffectiveToDt;
            export declare const SailStartDate;
            export declare const SailEndDate;
            export declare const CreatedTs;
            export declare const CreatedByNam;
            export declare const ModifiedTs;
            export declare const ModifiedByNam;
        }

        [
            'CapacityId',
            'ShipCd',
            'DoCapacity',
            'CabinCapacity',
            'EffectiveFromDt',
            'EffectiveToDt',
            'SailStartDate',
            'SailEndDate',
            'CreatedTs',
            'CreatedByNam',
            'ModifiedTs',
            'ModifiedByNam'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}