namespace DAP.DWSupport {
    export interface CategoryMasterSuppRow {
        CategoryMasterSurKey?: string;
        ShipCd?: string;
        SailFromDat?: string;
        SailToDat?: string;
        CategoryCd?: string;
        MetaCategoryCd?: string;
        FleetCategoryPriorityNbr?: number;
        PseudoCategoryCd?: string;
        MandatoryAssignmentCd?: string;
        NewMetaCategoryCd?: string;
        RmsPseudoCategoryCd?: string;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedByNam?: string;
        ModifiedTs?: string;
    }

    export namespace CategoryMasterSuppRow {
        export const idProperty = 'CategoryMasterSurKey';
        export const nameProperty = 'CategoryMasterSurKey';
        export const localTextPrefix = 'DWSupport.CategoryMasterSupp';

        export declare const enum Fields {
            CategoryMasterSurKey = "CategoryMasterSurKey",
            ShipCd = "ShipCd",
            SailFromDat = "SailFromDat",
            SailToDat = "SailToDat",
            CategoryCd = "CategoryCd",
            MetaCategoryCd = "MetaCategoryCd",
            FleetCategoryPriorityNbr = "FleetCategoryPriorityNbr",
            PseudoCategoryCd = "PseudoCategoryCd",
            MandatoryAssignmentCd = "MandatoryAssignmentCd",
            NewMetaCategoryCd = "NewMetaCategoryCd",
            RmsPseudoCategoryCd = "RmsPseudoCategoryCd",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedByNam = "ModifiedByNam",
            ModifiedTs = "ModifiedTs"
        }
    }
}

