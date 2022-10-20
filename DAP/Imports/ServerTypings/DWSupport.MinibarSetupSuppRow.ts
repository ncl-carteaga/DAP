namespace DAP.DWSupport {
    export interface MinibarSetupSuppRow {
        MinibarSetupSurKey?: number;
        ShipCd?: string;
        EffectiveDat?: string;
        MinibarSetupCostAmt?: number;
        CommentTxt?: string;
        CreatedByNam?: string;
        CreatedTs?: string;
        ModifiedByNam?: string;
        ModifiedTs?: string;
    }

    export namespace MinibarSetupSuppRow {
        export const idProperty = 'MinibarSetupSurKey';
        export const nameProperty = 'ShipCd';
        export const localTextPrefix = 'DWSupport.MinibarSetupSupp';

        export declare const enum Fields {
            MinibarSetupSurKey = "MinibarSetupSurKey",
            ShipCd = "ShipCd",
            EffectiveDat = "EffectiveDat",
            MinibarSetupCostAmt = "MinibarSetupCostAmt",
            CommentTxt = "CommentTxt",
            CreatedByNam = "CreatedByNam",
            CreatedTs = "CreatedTs",
            ModifiedByNam = "ModifiedByNam",
            ModifiedTs = "ModifiedTs"
        }
    }
}

