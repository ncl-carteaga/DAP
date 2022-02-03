
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class MasterDialog extends Serenity.EntityDialog<MasterRow, any> {
        protected getFormKey() { return MasterForm.formKey; }
        protected getIdProperty() { return MasterRow.idProperty; }
        protected getLocalTextPrefix() { return MasterRow.localTextPrefix; }
        protected getNameProperty() { return MasterRow.nameProperty; }
        protected getService() { return MasterService.baseUrl; }

        protected form = new MasterForm(this.idPrefix);

    }
}