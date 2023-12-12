namespace DAP.DWSupport {
    export interface CreditCardAdjSuppRow {
        CreditcardAdjId?: number;
        Office?: string;
        BlendedRate?: number;
        ProposedRate?: number;
        EffectiveFromDt?: string;
        EffectiveToDt?: string;
        CreatedTs?: string;
        CreatedByName?: string;
        ModifiedTs?: string;
        ModifiedByNam?: string;
    }

    export namespace CreditCardAdjSuppRow {
        export const idProperty = 'CreditcardAdjId';
        export const nameProperty = 'Office';
        export const localTextPrefix = 'DWSupport.CreditCardAdjSupp';

        export declare const enum Fields {
            CreditcardAdjId = "CreditcardAdjId",
            Office = "Office",
            BlendedRate = "BlendedRate",
            ProposedRate = "ProposedRate",
            EffectiveFromDt = "EffectiveFromDt",
            EffectiveToDt = "EffectiveToDt",
            CreatedTs = "CreatedTs",
            CreatedByName = "CreatedByName",
            ModifiedTs = "ModifiedTs",
            ModifiedByNam = "ModifiedByNam"
        }
    }
}

