
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class CapacitySuppGrid extends Serenity.EntityGrid<CapacitySuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.CapacitySupp'; }
        protected getDialogType() { return CapacitySuppDialog; }
        protected getIdProperty() { return CapacitySuppRow.idProperty; }
        protected getLocalTextPrefix() { return CapacitySuppRow.localTextPrefix; }
        protected getService() { return CapacitySuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}