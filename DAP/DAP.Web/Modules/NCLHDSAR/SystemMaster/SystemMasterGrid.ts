
namespace DAP.NCLHDSAR {

    @Serenity.Decorators.registerClass()
    export class SystemMasterGrid extends Serenity.EntityGrid<SystemMasterRow, any> {
        protected getColumnsKey() { return 'NCLHDSAR.SystemMaster'; }
        protected getDialogType() { return SystemMasterDialog; }
        protected getIdProperty() { return SystemMasterRow.idProperty; }
        protected getLocalTextPrefix() { return SystemMasterRow.localTextPrefix; }
        protected getService() { return SystemMasterService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}