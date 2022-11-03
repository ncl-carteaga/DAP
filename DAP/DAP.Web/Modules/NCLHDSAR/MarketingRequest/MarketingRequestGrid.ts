
namespace DAP.NCLHDSAR {

    @Serenity.Decorators.registerClass()
    export class MarketingRequestGrid extends Serenity.EntityGrid<MarketingRequestRow, any> {
        protected getColumnsKey() { return 'NCLHDSAR.MarketingRequest'; }
        protected getDialogType() { return MarketingRequestDialog; }
        protected getIdProperty() { return MarketingRequestRow.idProperty; }
        protected getLocalTextPrefix() { return MarketingRequestRow.localTextPrefix; }
        protected getService() { return MarketingRequestService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}