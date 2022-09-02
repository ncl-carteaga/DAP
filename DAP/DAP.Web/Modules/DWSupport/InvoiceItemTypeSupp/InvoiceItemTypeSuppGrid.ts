
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
            return super.getColumns().filter(x => x.field !== fld.InvoiceItemTypeCd);
        }

        protected initEntityDialog(itemType, dialog) {
            super.initEntityDialog(itemType, dialog);
            Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
        }

        protected addButtonClick() {
            this.editItem({ InvoiceItemTypeCd: this.invoiceItemTypeCd });
        }

        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            // return true if grid can load and Grid's field exists
            return super.getGridCanLoad() && !!this.invoiceItemTypeCd
        }

        private _invoiceItemTypeCd: string;

        get invoiceItemTypeCd() {
            return this._invoiceItemTypeCd;
        }
        
        set invoiceItemTypeCd(value: string) {
            if (this._invoiceItemTypeCd !== value) {
                this._invoiceItemTypeCd = value;
                this.setEquality('InvoiceItemTypeCd', value);
                this.refresh();
            }
        }
    }
}