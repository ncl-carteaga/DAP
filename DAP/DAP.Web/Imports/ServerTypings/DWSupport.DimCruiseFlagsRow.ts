
namespace DAP.DWSupport {
    export interface DimCruiseFlagsRow {
        DimCruiseFlagId?: number;
        CruiseCd?: string;
        CruiseSegmentCd?: string;
        ShipCd?: string;
        CompanyCd?: string;
        CappedCapacity?: number;
        OnbrdAvgPaxQty?: number;
        HighlightInd?: number;
        ColorInd?: string;
        DrydockInd?: number;
        VarToCurve?: number;
        ShowInDr001?: string;
        ShowInDr010?: string;
        ShowInCube?: string;
        IntlDatelineInd?: string;
        MinisegInd?: string;
        EffectiveFrom?: string;
        EffectiveTo?: string;
        LoadDt?: string;
    }

    export namespace DimCruiseFlagsRow {
        export const idProperty = 'DimCruiseFlagId';
        export const nameProperty = 'CruiseCd';
        export const localTextPrefix = 'DWSupport.DimCruiseFlags';

        export namespace Fields {
            export declare const DimCruiseFlagId;
            export declare const CruiseCd;
            export declare const CruiseSegmentCd;
            export declare const ShipCd;
            export declare const CompanyCd;
            export declare const CappedCapacity;
            export declare const OnbrdAvgPaxQty;
            export declare const HighlightInd;
            export declare const ColorInd;
            export declare const DrydockInd;
            export declare const VarToCurve;
            export declare const ShowInDr001;
            export declare const ShowInDr010;
            export declare const ShowInCube;
            export declare const IntlDatelineInd;
            export declare const MinisegInd;
            export declare const EffectiveFrom;
            export declare const EffectiveTo;
            export declare const LoadDt;
        }

        [
            'DimCruiseFlagId',
            'CruiseCd',
            'CruiseSegmentCd',
            'ShipCd',
            'CompanyCd',
            'CappedCapacity',
            'OnbrdAvgPaxQty',
            'HighlightInd',
            'ColorInd',
            'DrydockInd',
            'VarToCurve',
            'ShowInDr001',
            'ShowInDr010',
            'ShowInCube',
            'IntlDatelineInd',
            'MinisegInd',
            'EffectiveFrom',
            'EffectiveTo',
            'LoadDt'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}