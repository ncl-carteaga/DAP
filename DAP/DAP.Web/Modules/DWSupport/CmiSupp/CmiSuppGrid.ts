
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class CmiSuppGrid extends Serenity.EntityGrid<CmiSuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.CmiSupp'; }
        protected getDialogType() { return CmiSuppDialog; }
        protected getIdProperty() { return CmiSuppRow.idProperty; }
        protected getLocalTextPrefix() { return CmiSuppRow.localTextPrefix; }
        protected getService() { return CmiSuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}