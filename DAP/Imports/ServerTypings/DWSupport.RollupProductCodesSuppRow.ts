namespace DAP.DWSupport {
    export interface RollupProductCodesSuppRow {
        RollupProductSurKey?: number;
        ProductCd?: string;
        RmRollupProductCd?: string;
        RmRollupProductDesc?: string;
        BrochureRollupProductCd?: string;
        BrochureRollupProductDesc?: string;
        CreatedByNam?: string;
        CreatedTs?: string;
        ModifiedByNam?: string;
        ModifiedTs?: string;
    }

    export namespace RollupProductCodesSuppRow {
        export const idProperty = 'RollupProductSurKey';
        export const nameProperty = 'ProductCd';
        export const localTextPrefix = 'DWSupport.RollupProductCodesSupp';

        export declare const enum Fields {
            RollupProductSurKey = "RollupProductSurKey",
            ProductCd = "ProductCd",
            RmRollupProductCd = "RmRollupProductCd",
            RmRollupProductDesc = "RmRollupProductDesc",
            BrochureRollupProductCd = "BrochureRollupProductCd",
            BrochureRollupProductDesc = "BrochureRollupProductDesc",
            CreatedByNam = "CreatedByNam",
            CreatedTs = "CreatedTs",
            ModifiedByNam = "ModifiedByNam",
            ModifiedTs = "ModifiedTs"
        }
    }
}

