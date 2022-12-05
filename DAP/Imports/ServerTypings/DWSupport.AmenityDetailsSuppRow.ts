namespace DAP.DWSupport {
    export interface AmenityDetailsSuppRow {
        AmenityDetailId?: number;
        AmenityDetailCd?: string;
        OfficeCd?: string;
        AmenityId?: number;
        SailDayFromQty?: number;
        SailDayToQty?: number;
        AmenityPtsQty?: number;
        MinCabinQty?: number;
        ConditionDesc?: string;
        CommentTxt?: string;
        CreatedDat?: string;
        CreatedByNam?: string;
        ModifiedDat?: string;
        ModifiedByNam?: string;
        AmenityAmenityCd?: string;
        AmenityAmenityTypeId?: number;
        AmenityAmenityDesc?: string;
        AmenityAmenityCategoryCd?: string;
        AmenityDisplayOrderCd?: number;
        AmenityConditionDesc?: string;
        AmenityCommentTxt?: string;
        AmenityAmenityCostAmt?: number;
        AmenityAmenityAddonAmt?: number;
        AmenityIsPerDiemCd?: string;
        AmenityCurrencyCd?: string;
        AmenityCreatedDat?: string;
        AmenityCreatedByNam?: string;
        AmenityModifiedDat?: string;
        AmenityModifiedByNam?: string;
    }

    export namespace AmenityDetailsSuppRow {
        export const idProperty = 'AmenityDetailId';
        export const nameProperty = 'AmenityDetailCd';
        export const localTextPrefix = 'DWSupport.AmenityDetailsSupp';

        export declare const enum Fields {
            AmenityDetailId = "AmenityDetailId",
            AmenityDetailCd = "AmenityDetailCd",
            OfficeCd = "OfficeCd",
            AmenityId = "AmenityId",
            SailDayFromQty = "SailDayFromQty",
            SailDayToQty = "SailDayToQty",
            AmenityPtsQty = "AmenityPtsQty",
            MinCabinQty = "MinCabinQty",
            ConditionDesc = "ConditionDesc",
            CommentTxt = "CommentTxt",
            CreatedDat = "CreatedDat",
            CreatedByNam = "CreatedByNam",
            ModifiedDat = "ModifiedDat",
            ModifiedByNam = "ModifiedByNam",
            AmenityAmenityCd = "AmenityAmenityCd",
            AmenityAmenityTypeId = "AmenityAmenityTypeId",
            AmenityAmenityDesc = "AmenityAmenityDesc",
            AmenityAmenityCategoryCd = "AmenityAmenityCategoryCd",
            AmenityDisplayOrderCd = "AmenityDisplayOrderCd",
            AmenityConditionDesc = "AmenityConditionDesc",
            AmenityCommentTxt = "AmenityCommentTxt",
            AmenityAmenityCostAmt = "AmenityAmenityCostAmt",
            AmenityAmenityAddonAmt = "AmenityAmenityAddonAmt",
            AmenityIsPerDiemCd = "AmenityIsPerDiemCd",
            AmenityCurrencyCd = "AmenityCurrencyCd",
            AmenityCreatedDat = "AmenityCreatedDat",
            AmenityCreatedByNam = "AmenityCreatedByNam",
            AmenityModifiedDat = "AmenityModifiedDat",
            AmenityModifiedByNam = "AmenityModifiedByNam"
        }
    }
}

