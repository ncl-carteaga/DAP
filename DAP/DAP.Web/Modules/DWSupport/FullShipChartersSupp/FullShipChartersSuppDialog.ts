
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class FullShipChartersSuppDialog extends Serenity.EntityDialog<FullShipChartersSuppRow, any> {
        protected getFormKey() { return FullShipChartersSuppForm.formKey; }
        protected getIdProperty() { return FullShipChartersSuppRow.idProperty; }
        protected getLocalTextPrefix() { return FullShipChartersSuppRow.localTextPrefix; }
        protected getNameProperty() { return FullShipChartersSuppRow.nameProperty; }
        protected getService() { return FullShipChartersSuppService.baseUrl; }

        protected form = new FullShipChartersSuppForm(this.idPrefix);

    }
}