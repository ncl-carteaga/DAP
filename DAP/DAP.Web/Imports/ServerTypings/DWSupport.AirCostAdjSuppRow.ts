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

        export declare const enum Fields {
            AirCostAdjId = "AirCostAdjId",
            VoyageCd = "VoyageCd",
            RmEstimatedAirCost = "RmEstimatedAirCost",
            EffectiveFromDt = "EffectiveFromDt",
            EffectiveToDt = "EffectiveToDt",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedTs = "ModifiedTs",
            ModifiedByNam = "ModifiedByNam"
        }
    }
}

