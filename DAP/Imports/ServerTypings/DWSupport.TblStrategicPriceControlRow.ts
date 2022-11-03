namespace DAP.DWSupport {
    export interface TblStrategicPriceControlRow {
        SailId?: number;
        CategoryCd?: string;
        EffectiveFromDat?: string;
        EffectiveToDat?: string;
        DiscPct?: number;
        CreatedDat?: string;
        CreatedByNam?: string;
        ModifiedDat?: string;
        ModifiedByNam?: string;
        StrategicPriceControlId?: number;
    }

    export namespace TblStrategicPriceControlRow {
        export const idProperty = 'StrategicPriceControlId';
        export const nameProperty = 'CategoryCd';
        export const localTextPrefix = 'DWSupport.TblStrategicPriceControl';

        export declare const enum Fields {
            SailId = "SailId",
            CategoryCd = "CategoryCd",
            EffectiveFromDat = "EffectiveFromDat",
            EffectiveToDat = "EffectiveToDat",
            DiscPct = "DiscPct",
            CreatedDat = "CreatedDat",
            CreatedByNam = "CreatedByNam",
            ModifiedDat = "ModifiedDat",
            ModifiedByNam = "ModifiedByNam",
            StrategicPriceControlId = "StrategicPriceControlId"
        }
    }
}

