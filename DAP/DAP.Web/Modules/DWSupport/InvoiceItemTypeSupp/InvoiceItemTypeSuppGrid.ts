
namespace DAP.DWSupport {

    import fld = InvoiceItemTypeSuppRow.Fields;

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

        protected getColumns(): Slick.Column[] {
            return super.getColumns().filter(x => x.field !== fld.InvoiceItemTypeGenNatKey);
        }

        protected initEntityDialog(itemType, dialog) {
            super.initEntityDialog(itemType, dialog);
            Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
        }

        protected addButtonClick() {
            this.editItem({ InvoiceItemTypeGenNatKey: this.invoiceItemTypeGenNatKey });
        }

        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.invoiceItemTypeGenNatKey;
        }

        private _invoiceItemTypeGenNatKey: number;

        get invoiceItemTypeGenNatKey() {
            return this._invoiceItemTypeGenNatKey;
        }

        set invoiceItemTypeGenNatKey(value: number) {
            if (this._invoiceItemTypeGenNatKey !== value) {
                this._invoiceItemTypeGenNatKey = value;
                this.setEquality('InvoiceItemTypeGenNatKey', value);
                this.refresh();
            }
        }
    }
}