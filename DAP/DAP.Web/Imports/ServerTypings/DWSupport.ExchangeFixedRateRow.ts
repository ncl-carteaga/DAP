namespace DAP.DWSupport {
    export interface ExchangeFixedRateRow {
        ExchangeFixedRateId?: number;
        CurrencyCd?: string;
        ExchangeRate?: number;
        EffectiveFrom?: string;
        EffectiveTo?: string;
        LoadDt?: string;
    }

    export namespace ExchangeFixedRateRow {
        export const idProperty = 'ExchangeFixedRateId';
        export const nameProperty = 'CurrencyCd';
        export const localTextPrefix = 'DWSupport.ExchangeFixedRate';

        export declare const enum Fields {
            ExchangeFixedRateId = "ExchangeFixedRateId",
            CurrencyCd = "CurrencyCd",
            ExchangeRate = "ExchangeRate",
            EffectiveFrom = "EffectiveFrom",
            EffectiveTo = "EffectiveTo",
            LoadDt = "LoadDt"
        }
    }
}

