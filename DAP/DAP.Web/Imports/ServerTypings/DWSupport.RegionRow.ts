namespace DAP.DWSupport {
    export interface RegionRow {
        RegionId?: number;
        RegionCd?: string;
        RegionType?: string;
        CompanyCd?: string;
        EffectiveFrom?: string;
        EffectiveTo?: string;
        LoadDt?: string;
    }

    export namespace RegionRow {
        export const idProperty = 'RegionId';
        export const nameProperty = 'RegionCd';
        export const localTextPrefix = 'DWSupport.Region';

        export declare const enum Fields {
            RegionId = "RegionId",
            RegionCd = "RegionCd",
            RegionType = "RegionType",
            CompanyCd = "CompanyCd",
            EffectiveFrom = "EffectiveFrom",
            EffectiveTo = "EffectiveTo",
            LoadDt = "LoadDt"
        }
    }
}

