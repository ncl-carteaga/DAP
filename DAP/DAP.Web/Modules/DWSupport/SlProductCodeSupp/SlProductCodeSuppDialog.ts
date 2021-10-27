
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class SlProductCodeSuppDialog extends Serenity.EntityDialog<SlProductCodeSuppRow, any> {
        protected getFormKey() { return SlProductCodeSuppForm.formKey; }
        protected getIdProperty() { return SlProductCodeSuppRow.idProperty; }
        protected getLocalTextPrefix() { return SlProductCodeSuppRow.localTextPrefix; }
        protected getNameProperty() { return SlProductCodeSuppRow.nameProperty; }
        protected getService() { return SlProductCodeSuppService.baseUrl; }

        protected form = new SlProductCodeSuppForm(this.idPrefix);

    }
}