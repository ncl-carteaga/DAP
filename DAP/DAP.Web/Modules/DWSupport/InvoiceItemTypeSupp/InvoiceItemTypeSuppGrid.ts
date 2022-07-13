
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
    }
}