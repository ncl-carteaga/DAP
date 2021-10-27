
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class TblStrategicPriceControlGrid extends Serenity.EntityGrid<TblStrategicPriceControlRow, any> {
        protected getColumnsKey() { return 'DWSupport.TblStrategicPriceControl'; }
        protected getDialogType() { return TblStrategicPriceControlDialog; }
        protected getIdProperty() { return TblStrategicPriceControlRow.idProperty; }
        protected getLocalTextPrefix() { return TblStrategicPriceControlRow.localTextPrefix; }
        protected getService() { return TblStrategicPriceControlService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}