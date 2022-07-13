namespace DAP.DWSupport {
    export interface AmenityTypesSuppRow {
        AmenityTypeId?: number;
        AmenityTypeCd?: string;
        AmenityTypeDesc?: string;
        ConditionDesc?: string;
        DisplayOrderCd?: number;
        CommentTxt?: string;
        CreatedDat?: string;
        CreatedByNam?: string;
        ModifiedDat?: string;
        ModifiedByNam?: string;
    }

    export namespace AmenityTypesSuppRow {
        export const idProperty = 'AmenityTypeId';
        export const nameProperty = 'AmenityTypeCd';
        export const localTextPrefix = 'DWSupport.AmenityTypesSupp';
        export const lookupKey = 'DWSupport.AmenityType';

        export function getLookup(): Q.Lookup<AmenityTypesSuppRow> {
            return Q.getLookup<AmenityTypesSuppRow>('DWSupport.AmenityType');
        }

        export declare const enum Fields {
            AmenityTypeId = "AmenityTypeId",
            AmenityTypeCd = "AmenityTypeCd",
            AmenityTypeDesc = "AmenityTypeDesc",
            ConditionDesc = "ConditionDesc",
            DisplayOrderCd = "DisplayOrderCd",
            CommentTxt = "CommentTxt",
            CreatedDat = "CreatedDat",
            CreatedByNam = "CreatedByNam",
            ModifiedDat = "ModifiedDat",
            ModifiedByNam = "ModifiedByNam"
        }
    }
}

