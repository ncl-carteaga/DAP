
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class AirCostAdjSuppGrid extends Serenity.EntityGrid<AirCostAdjSuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.AirCostAdjSupp'; }
        protected getDialogType() { return AirCostAdjSuppDialog; }
        protected getIdProperty() { return AirCostAdjSuppRow.idProperty; }
        protected getLocalTextPrefix() { return AirCostAdjSuppRow.localTextPrefix; }
        protected getService() { return AirCostAdjSuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}