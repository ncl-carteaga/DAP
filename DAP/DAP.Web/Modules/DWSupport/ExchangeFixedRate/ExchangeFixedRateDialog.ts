
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class ExchangeFixedRateDialog extends Serenity.EntityDialog<ExchangeFixedRateRow, any> {
        protected getFormKey() { return ExchangeFixedRateForm.formKey; }
        protected getIdProperty() { return ExchangeFixedRateRow.idProperty; }
        protected getLocalTextPrefix() { return ExchangeFixedRateRow.localTextPrefix; }
        protected getNameProperty() { return ExchangeFixedRateRow.nameProperty; }
        protected getService() { return ExchangeFixedRateService.baseUrl; }

        protected form = new ExchangeFixedRateForm(this.idPrefix);

    }
}