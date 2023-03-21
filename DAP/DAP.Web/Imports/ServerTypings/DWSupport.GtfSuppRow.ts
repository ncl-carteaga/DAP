namespace DAP.DWSupport {
    export interface GtfSuppRow {
        GtfsuppId?: number;
        ShipCd?: string;
        CategoryCd?: string;
        EmbarkDebarkCd?: string;
        Rate?: number;
        EffectiveFromDt?: string;
        EffectiveToDt?: string;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedTs?: string;
        ModifiedByNam?: string;
    }

    export namespace GtfSuppRow {
        export const idProperty = 'GtfsuppId';
        export const nameProperty = 'ShipCd';
        export const localTextPrefix = 'DWSupport.GtfSupp';

        export declare const enum Fields {
            GtfsuppId = "GtfsuppId",
            ShipCd = "ShipCd",
            CategoryCd = "CategoryCd",
            EmbarkDebarkCd = "EmbarkDebarkCd",
            Rate = "Rate",
            EffectiveFromDt = "EffectiveFromDt",
            EffectiveToDt = "EffectiveToDt",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedTs = "ModifiedTs",
            ModifiedByNam = "ModifiedByNam"
        }
    }
}

