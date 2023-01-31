
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class FinPlannedCapacitySuppDialog extends Serenity.EntityDialog<FinPlannedCapacitySuppRow, any> {
        protected getFormKey() { return FinPlannedCapacitySuppForm.formKey; }
        protected getIdProperty() { return FinPlannedCapacitySuppRow.idProperty; }
        protected getLocalTextPrefix() { return FinPlannedCapacitySuppRow.localTextPrefix; }
        protected getNameProperty() { return FinPlannedCapacitySuppRow.nameProperty; }
        protected getService() { return FinPlannedCapacitySuppService.baseUrl; }

        protected form = new FinPlannedCapacitySuppForm(this.idPrefix);

    }
}