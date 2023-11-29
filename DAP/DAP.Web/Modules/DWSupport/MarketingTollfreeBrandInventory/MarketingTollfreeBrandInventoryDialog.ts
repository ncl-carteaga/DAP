
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class MarketingTollfreeBrandInventoryDialog extends Serenity.EntityDialog<MarketingTollfreeBrandInventoryRow, any> {
        protected getFormKey() { return MarketingTollfreeBrandInventoryForm.formKey; }
        protected getIdProperty() { return MarketingTollfreeBrandInventoryRow.idProperty; }
        protected getLocalTextPrefix() { return MarketingTollfreeBrandInventoryRow.localTextPrefix; }
        protected getNameProperty() { return MarketingTollfreeBrandInventoryRow.nameProperty; }
        protected getService() { return MarketingTollfreeBrandInventoryService.baseUrl; }

        protected form = new MarketingTollfreeBrandInventoryForm(this.idPrefix);

    }
}