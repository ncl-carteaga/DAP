
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

        export namespace Fields {
            export declare const ExchangeFixedRateId;
            export declare const CurrencyCd;
            export declare const ExchangeRate;
            export declare const EffectiveFrom;
            export declare const EffectiveTo;
            export declare const LoadDt;
        }

        [
            'ExchangeFixedRateId',
            'CurrencyCd',
            'ExchangeRate',
            'EffectiveFrom',
            'EffectiveTo',
            'LoadDt'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}