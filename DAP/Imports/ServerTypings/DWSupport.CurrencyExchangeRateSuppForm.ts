namespace DAP.DWSupport {
    export interface CurrencyExchangeRateSuppForm {
        CurrencyCd: Serenity.StringEditor;
        SailFromDat: Serenity.DateEditor;
        SailToDat: Serenity.DateEditor;
        ExchangeRateNbr: Serenity.DecimalEditor;
        CommentTxt: Serenity.StringEditor;
        AuditRecordId: Serenity.StringEditor;
        CreatedByNam: Serenity.StringEditor;
        CreatedTs: Serenity.DateEditor;
        ModifiedByNam: Serenity.StringEditor;
        ModifiedTs: Serenity.DateEditor;
    }

    export class CurrencyExchangeRateSuppForm extends Serenity.PrefixedContext {
        static formKey = 'DWSupport.CurrencyExchangeRateSupp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CurrencyExchangeRateSuppForm.init)  {
                CurrencyExchangeRateSuppForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(CurrencyExchangeRateSuppForm, [
                    'CurrencyCd', w0,
                    'SailFromDat', w1,
                    'SailToDat', w1,
                    'ExchangeRateNbr', w2,
                    'CommentTxt', w0,
                    'AuditRecordId', w0,
                    'CreatedByNam', w0,
                    'CreatedTs', w1,
                    'ModifiedByNam', w0,
                    'ModifiedTs', w1
                ]);
            }
        }
    }
}

