
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class DrydockSuppDialog extends Serenity.EntityDialog<DrydockSuppRow, any> {
        protected getFormKey() { return DrydockSuppForm.formKey; }
        protected getIdProperty() { return DrydockSuppRow.idProperty; }
        protected getLocalTextPrefix() { return DrydockSuppRow.localTextPrefix; }
        protected getNameProperty() { return DrydockSuppRow.nameProperty; }
        protected getService() { return DrydockSuppService.baseUrl; }

        protected form = new DrydockSuppForm(this.idPrefix);

    }
}