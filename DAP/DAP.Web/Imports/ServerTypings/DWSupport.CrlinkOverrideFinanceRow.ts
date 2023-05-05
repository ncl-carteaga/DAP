namespace DAP.DWSupport {
    export interface CrlinkOverrideFinanceRow {
        CrlinkOverrideId?: number;
        CruiseCd?: string;
        CruiseSegmentCd?: string;
        CompanyCd?: string;
        EffectiveFrom?: string;
        EffectiveTo?: string;
        LoadDt?: string;
    }

    export namespace CrlinkOverrideFinanceRow {
        export const idProperty = 'CrlinkOverrideId';
        export const nameProperty = 'CruiseCd';
        export const localTextPrefix = 'DWSupport.CrlinkOverrideFinance';

        export declare const enum Fields {
            CrlinkOverrideId = "CrlinkOverrideId",
            CruiseCd = "CruiseCd",
            CruiseSegmentCd = "CruiseSegmentCd",
            CompanyCd = "CompanyCd",
            EffectiveFrom = "EffectiveFrom",
            EffectiveTo = "EffectiveTo",
            LoadDt = "LoadDt"
        }
    }
}

