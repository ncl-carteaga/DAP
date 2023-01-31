namespace DAP.DWSupport {
    export interface FinPlannedCapacitySuppRow {
        FinPlannedCapacitySurKey?: number;
        ShipCd?: string;
        SailFromDat?: string;
        SailToDat?: string;
        FinancialCabinCapacityQty?: number;
        FinancialGuestCapacityQty?: number;
        CapacityDesc?: string;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedByNam?: string;
        ModifiedTs?: string;
        UnadjustedFinancialCabinCapacityQty?: number;
        UnadjustedFinancialGuestCapacityQty?: number;
    }

    export namespace FinPlannedCapacitySuppRow {
        export const idProperty = 'FinPlannedCapacitySurKey';
        export const nameProperty = 'ShipCd';
        export const localTextPrefix = 'DWSupport.FinPlannedCapacitySupp';

        export declare const enum Fields {
            FinPlannedCapacitySurKey = "FinPlannedCapacitySurKey",
            ShipCd = "ShipCd",
            SailFromDat = "SailFromDat",
            SailToDat = "SailToDat",
            FinancialCabinCapacityQty = "FinancialCabinCapacityQty",
            FinancialGuestCapacityQty = "FinancialGuestCapacityQty",
            CapacityDesc = "CapacityDesc",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedByNam = "ModifiedByNam",
            ModifiedTs = "ModifiedTs",
            UnadjustedFinancialCabinCapacityQty = "UnadjustedFinancialCabinCapacityQty",
            UnadjustedFinancialGuestCapacityQty = "UnadjustedFinancialGuestCapacityQty"
        }
    }
}

