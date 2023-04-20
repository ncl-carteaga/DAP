namespace DAP.DWSupport {
    export interface CruiseSegmentDaysOverrideRow {
        CruiseSegmentDayOverrideId?: number;
        CruiseCd?: string;
        CompanyCd?: string;
        CruiseDaysQty?: number;
        CruiseSegmentDaysQty?: number;
        EffectiveFrom?: string;
        EffectiveTo?: string;
        LoadDt?: string;
    }

    export namespace CruiseSegmentDaysOverrideRow {
        export const idProperty = 'CruiseSegmentDayOverrideId';
        export const nameProperty = 'CruiseCd';
        export const localTextPrefix = 'DWSupport.CruiseSegmentDaysOverride';

        export declare const enum Fields {
            CruiseSegmentDayOverrideId = "CruiseSegmentDayOverrideId",
            CruiseCd = "CruiseCd",
            CompanyCd = "CompanyCd",
            CruiseDaysQty = "CruiseDaysQty",
            CruiseSegmentDaysQty = "CruiseSegmentDaysQty",
            EffectiveFrom = "EffectiveFrom",
            EffectiveTo = "EffectiveTo",
            LoadDt = "LoadDt"
        }
    }
}

