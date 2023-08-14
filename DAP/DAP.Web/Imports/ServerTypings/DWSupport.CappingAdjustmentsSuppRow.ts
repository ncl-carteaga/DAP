namespace DAP.DWSupport {
    export interface CappingAdjustmentsSuppRow {
        Id?: number;
        CompanyCd?: string;
        ShipCd?: string;
        CruiseCd?: string;
        CappedCabinCapacity?: number;
        SingleCabinCapacity?: number;
        EffectiveFromDate?: string;
        EffectiveToDate?: string;
        ModifiedTs?: string;
        ModifiedByNam?: string;
    }

    export namespace CappingAdjustmentsSuppRow {
        export const idProperty = 'Id';
        export const nameProperty = 'CompanyCd';
        export const localTextPrefix = 'DWSupport.CappingAdjustmentsSupp';

        export declare const enum Fields {
            Id = "Id",
            CompanyCd = "CompanyCd",
            ShipCd = "ShipCd",
            CruiseCd = "CruiseCd",
            CappedCabinCapacity = "CappedCabinCapacity",
            SingleCabinCapacity = "SingleCabinCapacity",
            EffectiveFromDate = "EffectiveFromDate",
            EffectiveToDate = "EffectiveToDate",
            ModifiedTs = "ModifiedTs",
            ModifiedByNam = "ModifiedByNam"
        }
    }
}

