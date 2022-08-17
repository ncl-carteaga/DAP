
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class InvoiceItemTypeSuppGrid extends Serenity.EntityGrid<InvoiceItemTypeSuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.InvoiceItemTypeSupp'; }
        protected getDialogType() { return InvoiceItemTypeSuppDialog; }
        protected getIdProperty() { return InvoiceItemTypeSuppRow.idProperty; }
        protected getLocalTextPrefix() { return InvoiceItemTypeSuppRow.localTextPrefix; }
        protected getService() { return InvoiceItemTypeSuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons(): Serenity.ToolButton[] {

            var buttons = super.getButtons();
            // REMOVE button if no access
            if (!Authorization.hasPermission("DWSupport:DWSupport_Revenue")) {
                buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            }

            return buttons;
        }
    }
}