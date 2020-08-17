
namespace DAP.PCHDW {

    @Serenity.Decorators.registerClass()
    export class DimInvoiceDialog extends Serenity.EntityDialog<DimInvoiceRow, any> {
        protected getFormKey() { return DimInvoiceForm.formKey; }
        protected getIdProperty() { return DimInvoiceRow.idProperty; }
        protected getLocalTextPrefix() { return DimInvoiceRow.localTextPrefix; }
        protected getNameProperty() { return DimInvoiceRow.nameProperty; }
        protected getService() { return DimInvoiceService.baseUrl; }

        protected form = new DimInvoiceForm(this.idPrefix);

        protected getToolbarButtons(): Serenity.ToolButton[] {
            var b = super.getToolbarButtons();

            b.splice(Q.indexOf(b, x => x.cssClass == "delete-button"), 1);
            return b;
        }
    }
}