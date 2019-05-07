
namespace DAP.NCLHDSAR {

    @Serenity.Decorators.registerClass()
    export class SystemMasterDialog extends Serenity.EntityDialog<SystemMasterRow, any> {
        protected getFormKey() { return SystemMasterForm.formKey; }
        protected getIdProperty() { return SystemMasterRow.idProperty; }
        protected getLocalTextPrefix() { return SystemMasterRow.localTextPrefix; }
        protected getNameProperty() { return SystemMasterRow.nameProperty; }
        protected getService() { return SystemMasterService.baseUrl; }

        protected form = new SystemMasterForm(this.idPrefix);

    }
}