
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class CurrencyExchangeRateSuppDialog extends Serenity.EntityDialog<CurrencyExchangeRateSuppRow, any> {
        protected getFormKey() { return CurrencyExchangeRateSuppForm.formKey; }
        protected getIdProperty() { return CurrencyExchangeRateSuppRow.idProperty; }
        protected getLocalTextPrefix() { return CurrencyExchangeRateSuppRow.localTextPrefix; }
        protected getNameProperty() { return CurrencyExchangeRateSuppRow.nameProperty; }
        protected getService() { return CurrencyExchangeRateSuppService.baseUrl; }

        protected form = new CurrencyExchangeRateSuppForm(this.idPrefix);

    }
}