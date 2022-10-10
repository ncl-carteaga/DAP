
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class InvoiceItemTypeSuppDialog extends Serenity.EntityDialog<InvoiceItemTypeSuppRow, any> {
        protected getFormKey() { return InvoiceItemTypeSuppForm.formKey; }
        protected getIdProperty() { return InvoiceItemTypeSuppRow.idProperty; }
        protected getLocalTextPrefix() { return InvoiceItemTypeSuppRow.localTextPrefix; }
        protected getNameProperty() { return InvoiceItemTypeSuppRow.nameProperty; }
        protected getService() { return InvoiceItemTypeSuppService.baseUrl; }

        protected form = new InvoiceItemTypeSuppForm(this.idPrefix);

        protected getToolbarButtons(): Serenity.ToolButton[] {
            var b = super.getToolbarButtons();

            b.splice(Q.indexOf(b, x => x.cssClass == "delete-button"), 1);
            return b;
        }
    }
}