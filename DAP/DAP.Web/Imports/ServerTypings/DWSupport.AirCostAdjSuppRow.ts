
namespace DAP.DWSupport {
    export interface AirCostAdjSuppRow {
        AirCostAdjId?: number;
        VoyageCd?: string;
        RmEstimatedAirCost?: number;
        EffectiveFromDt?: string;
        EffectiveToDt?: string;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedTs?: string;
        ModifiedByNam?: string;
    }

    export namespace AirCostAdjSuppRow {
        export const idProperty = 'AirCostAdjId';
        export const nameProperty = 'VoyageCd';
        export const localTextPrefix = 'DWSupport.AirCostAdjSupp';

        export namespace Fields {
            export declare const AirCostAdjId;
            export declare const VoyageCd;
            export declare const RmEstimatedAirCost;
            export declare const EffectiveFromDt;
            export declare const EffectiveToDt;
            export declare const CreatedTs;
            export declare const CreatedByNam;
            export declare const ModifiedTs;
            export declare const ModifiedByNam;
        }

        [
            'AirCostAdjId',
            'VoyageCd',
            'RmEstimatedAirCost',
            'EffectiveFromDt',
            'EffectiveToDt',
            'CreatedTs',
            'CreatedByNam',
            'ModifiedTs',
            'ModifiedByNam'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}