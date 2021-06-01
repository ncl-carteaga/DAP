
namespace DAP.SSISConfig {

    @Serenity.Decorators.registerClass()
    export class NclhShipDialog extends Serenity.EntityDialog<NclhShipRow, any> {
        protected getFormKey() { return NclhShipForm.formKey; }
        protected getIdProperty() { return NclhShipRow.idProperty; }
        protected getLocalTextPrefix() { return NclhShipRow.localTextPrefix; }
        protected getNameProperty() { return NclhShipRow.nameProperty; }
        protected getService() { return NclhShipService.baseUrl; }

        protected form = new NclhShipForm(this.idPrefix);

    }
}