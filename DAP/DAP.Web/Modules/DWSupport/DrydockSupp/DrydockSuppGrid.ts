
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class DrydockSuppGrid extends Serenity.EntityGrid<DrydockSuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.DrydockSupp'; }
        protected getDialogType() { return DrydockSuppDialog; }
        protected getIdProperty() { return DrydockSuppRow.idProperty; }
        protected getLocalTextPrefix() { return DrydockSuppRow.localTextPrefix; }
        protected getService() { return DrydockSuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}