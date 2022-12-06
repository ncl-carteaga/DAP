namespace DAP.DWSupport {
    export interface PsGlAccountSuppRow {
        AccountSurKey?: number;
        SetId?: string;
        AccountId?: string;
        OlapAccountDesc?: string;
        GrossCostCd?: string;
        AccountClassType1Cd?: string;
        AccountClassType2Cd?: string;
        AccountClassType3Cd?: string;
        AccountClassType4Cd?: string;
        CreatedTs?: string;
        CreatedByNam?: string;
        ModifiedByNam?: string;
        ModifiedTs?: string;
    }

    export namespace PsGlAccountSuppRow {
        export const idProperty = 'AccountSurKey';
        export const nameProperty = 'SetId';
        export const localTextPrefix = 'DWSupport.PsGlAccountSupp';

        export declare const enum Fields {
            AccountSurKey = "AccountSurKey",
            SetId = "SetId",
            AccountId = "AccountId",
            OlapAccountDesc = "OlapAccountDesc",
            GrossCostCd = "GrossCostCd",
            AccountClassType1Cd = "AccountClassType1Cd",
            AccountClassType2Cd = "AccountClassType2Cd",
            AccountClassType3Cd = "AccountClassType3Cd",
            AccountClassType4Cd = "AccountClassType4Cd",
            CreatedTs = "CreatedTs",
            CreatedByNam = "CreatedByNam",
            ModifiedByNam = "ModifiedByNam",
            ModifiedTs = "ModifiedTs"
        }
    }
}

