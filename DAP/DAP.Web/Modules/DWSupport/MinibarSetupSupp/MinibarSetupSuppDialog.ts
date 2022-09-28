
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class MinibarSetupSuppDialog extends Serenity.EntityDialog<MinibarSetupSuppRow, any> {
        protected getFormKey() { return MinibarSetupSuppForm.formKey; }
        protected getIdProperty() { return MinibarSetupSuppRow.idProperty; }
        protected getLocalTextPrefix() { return MinibarSetupSuppRow.localTextPrefix; }
        protected getNameProperty() { return MinibarSetupSuppRow.nameProperty; }
        protected getService() { return MinibarSetupSuppService.baseUrl; }

        protected form = new MinibarSetupSuppForm(this.idPrefix);

    }
}