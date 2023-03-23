namespace DAP.DWSupport {
    export interface CreditCardAdjSuppRow {
        CreditcardAdjId?: number;
        LocationCd?: string;
        BaseRate?: number;
        ParticipationRate?: number;
        BlendedRate?: number;
        CxBuffer?: number;
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
        export const nameProperty = 'LocationCd';
        export const localTextPrefix = 'DWSupport.CreditCardAdjSupp';

        export declare const enum Fields {
            CreditcardAdjId = "CreditcardAdjId",
            LocationCd = "LocationCd",
            BaseRate = "BaseRate",
            ParticipationRate = "ParticipationRate",
            BlendedRate = "BlendedRate",
            CxBuffer = "CxBuffer",
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

