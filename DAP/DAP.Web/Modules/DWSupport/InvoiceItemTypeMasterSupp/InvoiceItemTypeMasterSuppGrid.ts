
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class InvoiceItemTypeMasterSuppGrid extends Serenity.EntityGrid<InvoiceItemTypeMasterSuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.InvoiceItemTypeMasterSupp'; }
        protected getDialogType() { return InvoiceItemTypeMasterSuppDialog; }
        protected getIdProperty() { return InvoiceItemTypeMasterSuppRow.idProperty; }
        protected getLocalTextPrefix() { return InvoiceItemTypeMasterSuppRow.localTextPrefix; }
        protected getService() { return InvoiceItemTypeMasterSuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}