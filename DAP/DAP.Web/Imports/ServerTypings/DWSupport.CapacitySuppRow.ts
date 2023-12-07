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

        export declare const enum Fields {
            CapacityId = "CapacityId",
            ShipCd = "ShipCd",
            DoCapacity = "DoCapacity",
            CabinCapacity = "CabinCapacity",
            EffectiveFromDt = "EffectiveFromDt",
            EffectiveToDt = "EffectiveToDt",
            SailStartDate = "SailStartDate",
            SailEndDate = "SailEndDate",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedTs = "ModifiedTs",
            ModifiedByNam = "ModifiedByNam"
        }
    }
}

