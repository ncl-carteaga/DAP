namespace DAP.DWSupport {
    export interface AmenitiesSuppRow {
        AmenityId?: number;
        AmenityCd?: string;
        AmenityTypeId?: number;
        AmenityDesc?: string;
        AmenityCategoryCd?: string;
        DisplayOrderCd?: number;
        ConditionDesc?: string;
        CommentTxt?: string;
        AmenityCostAmt?: number;
        AmenityAddonAmt?: number;
        IsPerDiemCd?: string;
        CurrencyCd?: string;
        CreatedDat?: string;
        CreatedByNam?: string;
        ModifiedDat?: string;
        ModifiedByNam?: string;
        AmenityTypeAmenityTypeCd?: string;
        AmenityTypeAmenityTypeDesc?: string;
        AmenityTypeConditionDesc?: string;
        AmenityTypeDisplayOrderCd?: number;
        AmenityTypeCommentTxt?: string;
        AmenityTypeCreatedDat?: string;
        AmenityTypeCreatedByNam?: string;
        AmenityTypeModifiedDat?: string;
        AmenityTypeModifiedByNam?: string;
    }

    export namespace AmenitiesSuppRow {
        export const idProperty = 'AmenityId';
        export const nameProperty = 'AmenityCd';
        export const localTextPrefix = 'DWSupport.AmenitiesSupp';

        export declare const enum Fields {
            AmenityId = "AmenityId",
            AmenityCd = "AmenityCd",
            AmenityTypeId = "AmenityTypeId",
            AmenityDesc = "AmenityDesc",
            AmenityCategoryCd = "AmenityCategoryCd",
            DisplayOrderCd = "DisplayOrderCd",
            ConditionDesc = "ConditionDesc",
            CommentTxt = "CommentTxt",
            AmenityCostAmt = "AmenityCostAmt",
            AmenityAddonAmt = "AmenityAddonAmt",
            IsPerDiemCd = "IsPerDiemCd",
            CurrencyCd = "CurrencyCd",
            CreatedDat = "CreatedDat",
            CreatedByNam = "CreatedByNam",
            ModifiedDat = "ModifiedDat",
            ModifiedByNam = "ModifiedByNam",
            AmenityTypeAmenityTypeCd = "AmenityTypeAmenityTypeCd",
            AmenityTypeAmenityTypeDesc = "AmenityTypeAmenityTypeDesc",
            AmenityTypeConditionDesc = "AmenityTypeConditionDesc",
            AmenityTypeDisplayOrderCd = "AmenityTypeDisplayOrderCd",
            AmenityTypeCommentTxt = "AmenityTypeCommentTxt",
            AmenityTypeCreatedDat = "AmenityTypeCreatedDat",
            AmenityTypeCreatedByNam = "AmenityTypeCreatedByNam",
            AmenityTypeModifiedDat = "AmenityTypeModifiedDat",
            AmenityTypeModifiedByNam = "AmenityTypeModifiedByNam"
        }
    }
}

