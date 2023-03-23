
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class CreditCardAdjSuppGrid extends Serenity.EntityGrid<CreditCardAdjSuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.CreditCardAdjSupp'; }
        protected getDialogType() { return CreditCardAdjSuppDialog; }
        protected getIdProperty() { return CreditCardAdjSuppRow.idProperty; }
        protected getLocalTextPrefix() { return CreditCardAdjSuppRow.localTextPrefix; }
        protected getService() { return CreditCardAdjSuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}