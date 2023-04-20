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

        export declare const enum Fields {
            DimCruiseFlagId = "DimCruiseFlagId",
            CruiseCd = "CruiseCd",
            CruiseSegmentCd = "CruiseSegmentCd",
            ShipCd = "ShipCd",
            CompanyCd = "CompanyCd",
            CappedCapacity = "CappedCapacity",
            OnbrdAvgPaxQty = "OnbrdAvgPaxQty",
            HighlightInd = "HighlightInd",
            ColorInd = "ColorInd",
            DrydockInd = "DrydockInd",
            VarToCurve = "VarToCurve",
            ShowInDr001 = "ShowInDr001",
            ShowInDr010 = "ShowInDr010",
            ShowInCube = "ShowInCube",
            IntlDatelineInd = "IntlDatelineInd",
            MinisegInd = "MinisegInd",
            EffectiveFrom = "EffectiveFrom",
            EffectiveTo = "EffectiveTo",
            LoadDt = "LoadDt"
        }
    }
}

