
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

        export namespace Fields {
            export declare const CruiseSegmentDayOverrideId;
            export declare const CruiseCd;
            export declare const CompanyCd;
            export declare const CruiseDaysQty;
            export declare const CruiseSegmentDaysQty;
            export declare const EffectiveFrom;
            export declare const EffectiveTo;
            export declare const LoadDt;
        }

        [
            'CruiseSegmentDayOverrideId',
            'CruiseCd',
            'CompanyCd',
            'CruiseDaysQty',
            'CruiseSegmentDaysQty',
            'EffectiveFrom',
            'EffectiveTo',
            'LoadDt'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}