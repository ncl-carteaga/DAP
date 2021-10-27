namespace DAP.DWSupport {
    export interface SlProductCodeSuppRow {
        SlProductSurKey?: number;
        SlProductCd?: string;
        SlProductDesc?: string;
        CreatedByName?: string;
        CreatedTs?: string;
        ModifiedByName?: string;
        ModifiedTs?: string;
    }

    export namespace SlProductCodeSuppRow {
        export const idProperty = 'SlProductCd';
        export const nameProperty = 'SlProductDesc';
        export const localTextPrefix = 'DWSupport.SlProductCodeSupp';
        export const lookupKey = 'DWSupport.SlProductCodeSupp';

        export function getLookup(): Q.Lookup<SlProductCodeSuppRow> {
            return Q.getLookup<SlProductCodeSuppRow>('DWSupport.SlProductCodeSupp');
        }

        export declare const enum Fields {
            SlProductSurKey = "SlProductSurKey",
            SlProductCd = "SlProductCd",
            SlProductDesc = "SlProductDesc",
            CreatedByName = "CreatedByName",
            CreatedTs = "CreatedTs",
            ModifiedByName = "ModifiedByName",
            ModifiedTs = "ModifiedTs"
        }
    }
}

