
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class ExchangeFixedRateGrid extends Serenity.EntityGrid<ExchangeFixedRateRow, any> {
        protected getColumnsKey() { return 'DWSupport.ExchangeFixedRate'; }
        protected getDialogType() { return ExchangeFixedRateDialog; }
        protected getIdProperty() { return ExchangeFixedRateRow.idProperty; }
        protected getLocalTextPrefix() { return ExchangeFixedRateRow.localTextPrefix; }
        protected getService() { return ExchangeFixedRateService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}