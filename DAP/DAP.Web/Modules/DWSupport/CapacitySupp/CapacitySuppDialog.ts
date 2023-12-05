
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class CapacitySuppDialog extends Serenity.EntityDialog<CapacitySuppRow, any> {
        protected getFormKey() { return CapacitySuppForm.formKey; }
        protected getIdProperty() { return CapacitySuppRow.idProperty; }
        protected getLocalTextPrefix() { return CapacitySuppRow.localTextPrefix; }
        protected getNameProperty() { return CapacitySuppRow.nameProperty; }
        protected getService() { return CapacitySuppService.baseUrl; }

        protected form = new CapacitySuppForm(this.idPrefix);

    }
}