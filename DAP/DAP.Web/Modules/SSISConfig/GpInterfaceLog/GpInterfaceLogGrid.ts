
namespace DAP.SSISConfig {

    @Serenity.Decorators.registerClass()
    export class GpInterfaceLogGrid extends Serenity.EntityGrid<GpInterfaceLogRow, any> {
        protected getColumnsKey() { return 'SSISConfig.GpInterfaceLog'; }
        protected getDialogType() { return GpInterfaceLogDialog; }
        protected getIdProperty() { return GpInterfaceLogRow.idProperty; }
        protected getLocalTextPrefix() { return GpInterfaceLogRow.localTextPrefix; }
        protected getService() { return GpInterfaceLogService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}