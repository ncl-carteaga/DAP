
namespace DAP.SSISConfig {

    @Serenity.Decorators.registerClass()
    export class NclhShipGrid extends Serenity.EntityGrid<NclhShipRow, any> {
        protected getColumnsKey() { return 'SSISConfig.NclhShip'; }
        protected getDialogType() { return NclhShipDialog; }
        protected getIdProperty() { return NclhShipRow.idProperty; }
        protected getLocalTextPrefix() { return NclhShipRow.localTextPrefix; }
        protected getService() { return NclhShipService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}