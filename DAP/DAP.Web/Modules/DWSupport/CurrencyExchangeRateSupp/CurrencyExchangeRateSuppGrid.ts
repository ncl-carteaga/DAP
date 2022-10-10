
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class CurrencyExchangeRateSuppGrid extends Serenity.EntityGrid<CurrencyExchangeRateSuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.CurrencyExchangeRateSupp'; }
        protected getDialogType() { return CurrencyExchangeRateSuppDialog; }
        protected getIdProperty() { return CurrencyExchangeRateSuppRow.idProperty; }
        protected getLocalTextPrefix() { return CurrencyExchangeRateSuppRow.localTextPrefix; }
        protected getService() { return CurrencyExchangeRateSuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}