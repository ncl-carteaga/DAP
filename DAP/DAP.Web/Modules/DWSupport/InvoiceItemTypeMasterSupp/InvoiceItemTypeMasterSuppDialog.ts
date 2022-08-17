
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class InvoiceItemTypeMasterSuppDialog extends Serenity.EntityDialog<InvoiceItemTypeMasterSuppRow, any> {
        protected getFormKey() { return InvoiceItemTypeMasterSuppForm.formKey; }
        protected getIdProperty() { return InvoiceItemTypeMasterSuppRow.idProperty; }
        protected getLocalTextPrefix() { return InvoiceItemTypeMasterSuppRow.localTextPrefix; }
        protected getNameProperty() { return InvoiceItemTypeMasterSuppRow.nameProperty; }
        protected getService() { return InvoiceItemTypeMasterSuppService.baseUrl; }

        protected form = new InvoiceItemTypeMasterSuppForm(this.idPrefix);
    }
}