
namespace DAP.PCHDW {

    @Serenity.Decorators.registerClass()
    export class DimInvoiceGrid extends Serenity.EntityGrid<DimInvoiceRow, any> {
        protected getColumnsKey() { return 'PCHDW.DimInvoice'; }
        protected getDialogType() { return DimInvoiceDialog; }
        protected getIdProperty() { return DimInvoiceRow.idProperty; }
        protected getLocalTextPrefix() { return DimInvoiceRow.localTextPrefix; }
        protected getService() { return DimInvoiceService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            return buttons;
        }
    }
}