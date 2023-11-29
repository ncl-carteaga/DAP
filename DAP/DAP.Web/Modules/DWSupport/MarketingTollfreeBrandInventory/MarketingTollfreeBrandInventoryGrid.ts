
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class MarketingTollfreeBrandInventoryGrid extends Serenity.EntityGrid<MarketingTollfreeBrandInventoryRow, any> {
        protected getColumnsKey() { return 'DWSupport.MarketingTollfreeBrandInventory'; }
        protected getDialogType() { return MarketingTollfreeBrandInventoryDialog; }
        protected getIdProperty() { return MarketingTollfreeBrandInventoryRow.idProperty; }
        protected getLocalTextPrefix() { return MarketingTollfreeBrandInventoryRow.localTextPrefix; }
        protected getService() { return MarketingTollfreeBrandInventoryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}