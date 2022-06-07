
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class InvoiceItemTypeSuppDialog extends Serenity.EntityDialog<InvoiceItemTypeSuppRow, any> {
        protected getFormKey() { return InvoiceItemTypeSuppForm.formKey; }
        protected getIdProperty() { return InvoiceItemTypeSuppRow.idProperty; }
        protected getLocalTextPrefix() { return InvoiceItemTypeSuppRow.localTextPrefix; }
        protected getNameProperty() { return InvoiceItemTypeSuppRow.nameProperty; }
        protected getService() { return InvoiceItemTypeSuppService.baseUrl; }

        protected form = new InvoiceItemTypeSuppForm(this.idPrefix);

    }
}