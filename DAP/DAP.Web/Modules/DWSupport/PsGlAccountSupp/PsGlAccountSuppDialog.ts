
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class PsGlAccountSuppDialog extends Serenity.EntityDialog<PsGlAccountSuppRow, any> {
        protected getFormKey() { return PsGlAccountSuppForm.formKey; }
        protected getIdProperty() { return PsGlAccountSuppRow.idProperty; }
        protected getLocalTextPrefix() { return PsGlAccountSuppRow.localTextPrefix; }
        protected getNameProperty() { return PsGlAccountSuppRow.nameProperty; }
        protected getService() { return PsGlAccountSuppService.baseUrl; }

        protected form = new PsGlAccountSuppForm(this.idPrefix);

    }
}