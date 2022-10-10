
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class FullShipChartersSuppGrid extends Serenity.EntityGrid<FullShipChartersSuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.FullShipChartersSupp'; }
        protected getDialogType() { return FullShipChartersSuppDialog; }
        protected getIdProperty() { return FullShipChartersSuppRow.idProperty; }
        protected getLocalTextPrefix() { return FullShipChartersSuppRow.localTextPrefix; }
        protected getService() { return FullShipChartersSuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}