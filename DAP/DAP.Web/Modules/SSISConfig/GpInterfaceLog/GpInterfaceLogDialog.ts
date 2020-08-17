
namespace DAP.SSISConfig {

    @Serenity.Decorators.registerClass()
    export class GpInterfaceLogDialog extends Serenity.EntityDialog<GpInterfaceLogRow, any> {
        protected getFormKey() { return GpInterfaceLogForm.formKey; }
        protected getIdProperty() { return GpInterfaceLogRow.idProperty; }
        protected getLocalTextPrefix() { return GpInterfaceLogRow.localTextPrefix; }
        protected getNameProperty() { return GpInterfaceLogRow.nameProperty; }
        protected getService() { return GpInterfaceLogService.baseUrl; }

        protected form = new GpInterfaceLogForm(this.idPrefix);

    }
}