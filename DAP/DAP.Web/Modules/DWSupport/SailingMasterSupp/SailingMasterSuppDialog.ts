
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class SailingMasterSuppDialog extends Serenity.EntityDialog<SailingMasterSuppRow, any> {
        protected getFormKey() { return SailingMasterSuppForm.formKey; }
        protected getIdProperty() { return SailingMasterSuppRow.idProperty; }
        protected getLocalTextPrefix() { return SailingMasterSuppRow.localTextPrefix; }
        protected getNameProperty() { return SailingMasterSuppRow.nameProperty; }
        protected getService() { return SailingMasterSuppService.baseUrl; }

        protected form = new SailingMasterSuppForm(this.idPrefix);

    }
}