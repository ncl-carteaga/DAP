
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class FinPlannedCapacitySuppGrid extends Serenity.EntityGrid<FinPlannedCapacitySuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.FinPlannedCapacitySupp'; }
        protected getDialogType() { return FinPlannedCapacitySuppDialog; }
        protected getIdProperty() { return FinPlannedCapacitySuppRow.idProperty; }
        protected getLocalTextPrefix() { return FinPlannedCapacitySuppRow.localTextPrefix; }
        protected getService() { return FinPlannedCapacitySuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}