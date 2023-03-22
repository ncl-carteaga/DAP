namespace DAP.DWSupport {
    export interface UpgradeAdvAdjSuppRow {
        UpgradeAdvAdjId?: number;
        UpgradeAmountMin?: number;
        UpgradeAmountMax?: number;
        CommissionPercent?: number;
        EffectiveFromDt?: string;
        EffectiveToDt?: string;
        CreatedTs?: string;
        CreatedByName?: string;
        ModifiedTs?: string;
        ModifiedByName?: string;
    }

    export namespace UpgradeAdvAdjSuppRow {
        export const idProperty = 'UpgradeAdvAdjId';
        export const nameProperty = 'CreatedByName';
        export const localTextPrefix = 'DWSupport.UpgradeAdvAdjSupp';

        export declare const enum Fields {
            UpgradeAdvAdjId = "UpgradeAdvAdjId",
            UpgradeAmountMin = "UpgradeAmountMin",
            UpgradeAmountMax = "UpgradeAmountMax",
            CommissionPercent = "CommissionPercent",
            EffectiveFromDt = "EffectiveFromDt",
            EffectiveToDt = "EffectiveToDt",
            CreatedTs = "CreatedTs",
            CreatedByName = "CreatedByName",
            ModifiedTs = "ModifiedTs",
            ModifiedByName = "ModifiedByName"
        }
    }
}

