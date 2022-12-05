namespace DAP.DWSupport {
    export interface CurrencyExchangeRateSuppRow {
        CurrencySurKey?: number;
        CurrencyCd?: string;
        SailFromDat?: string;
        SailToDat?: string;
        ExchangeRateNbr?: number;
        CommentTxt?: string;
        AuditRecordId?: string;
        CreatedByNam?: string;
        CreatedTs?: string;
        ModifiedByNam?: string;
        ModifiedTs?: string;
    }

    export namespace CurrencyExchangeRateSuppRow {
        export const idProperty = 'CurrencySurKey';
        export const nameProperty = 'CurrencyCd';
        export const localTextPrefix = 'DWSupport.CurrencyExchangeRateSupp';

        export declare const enum Fields {
            CurrencySurKey = "CurrencySurKey",
            CurrencyCd = "CurrencyCd",
            SailFromDat = "SailFromDat",
            SailToDat = "SailToDat",
            ExchangeRateNbr = "ExchangeRateNbr",
            CommentTxt = "CommentTxt",
            AuditRecordId = "AuditRecordId",
            CreatedByNam = "CreatedByNam",
            CreatedTs = "CreatedTs",
            ModifiedByNam = "ModifiedByNam",
            ModifiedTs = "ModifiedTs"
        }
    }
}

