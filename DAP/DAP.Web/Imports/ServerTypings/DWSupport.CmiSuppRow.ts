namespace DAP.DWSupport {
    export interface CmiSuppRow {
        Id?: number;
        SailYear?: number;
        EffectiveStartDate?: string;
        EffectiveEndDate?: string;
        VoyageCD?: string;
        ShipCD?: string;
        VoyageStartDate?: string;
        VoyageEndDate?: string;
        AgencyID?: number;
        Market?: string;
        CmiTypeCd?: string;
        CharterFlagCd?: string;
        Ntr?: number;
        PaxDays?: number;
        BkCabinDays?: number;
        CapacityDays?: number;
        CabinCapacityDays?: number;
        CreatedByNam?: string;
        ModifiedByName?: string;
        ModifiedTs?: string;
        CreatedTs?: string;
    }

    export namespace CmiSuppRow {
        export const idProperty = 'Id';
        export const nameProperty = 'CmiTypeCd';
        export const localTextPrefix = 'DWSupport.CmiSupp';

        export declare const enum Fields {
            Id = "Id",
            SailYear = "SailYear",
            EffectiveStartDate = "EffectiveStartDate",
            EffectiveEndDate = "EffectiveEndDate",
            VoyageCD = "VoyageCD",
            ShipCD = "ShipCD",
            VoyageStartDate = "VoyageStartDate",
            VoyageEndDate = "VoyageEndDate",
            AgencyID = "AgencyID",
            Market = "Market",
            CmiTypeCd = "CmiTypeCd",
            CharterFlagCd = "CharterFlagCd",
            Ntr = "Ntr",
            PaxDays = "PaxDays",
            BkCabinDays = "BkCabinDays",
            CapacityDays = "CapacityDays",
            CabinCapacityDays = "CabinCapacityDays",
            CreatedByNam = "CreatedByNam",
            ModifiedByName = "ModifiedByName",
            ModifiedTs = "ModifiedTs",
            CreatedTs = "CreatedTs"
        }
    }
}

