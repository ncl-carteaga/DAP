namespace DAP.DWSupport {
    export interface ProductCodeSuppRow {
        ProductSurKey?: number;
        ProductCd?: string;
        ProductDesc?: string;
        ProductCodeId?: number;
        CreatedByName?: string;
        CreatedTs?: string;
        ModifiedByName?: string;
        ModifiedTs?: string;
    }

    export namespace ProductCodeSuppRow {
        export const idProperty = 'ProductCd';
        export const nameProperty = 'ProductDesc';
        export const localTextPrefix = 'DWSupport.ProductCodeSupp';
        export const lookupKey = 'DWSupport.ProductCodeSupp';

        export function getLookup(): Q.Lookup<ProductCodeSuppRow> {
            return Q.getLookup<ProductCodeSuppRow>('DWSupport.ProductCodeSupp');
        }

        export declare const enum Fields {
            ProductSurKey = "ProductSurKey",
            ProductCd = "ProductCd",
            ProductDesc = "ProductDesc",
            ProductCodeId = "ProductCodeId",
            CreatedByName = "CreatedByName",
            CreatedTs = "CreatedTs",
            ModifiedByName = "ModifiedByName",
            ModifiedTs = "ModifiedTs"
        }
    }
}

