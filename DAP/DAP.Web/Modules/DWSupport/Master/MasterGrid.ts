
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class MasterGrid extends Serenity.EntityGrid<MasterRow, any> {
        protected getColumnsKey() { return 'DWSupport.Master'; }
        protected getDialogType() { return MasterDialog; }
        protected getIdProperty() { return MasterRow.idProperty; }
        protected getLocalTextPrefix() { return MasterRow.localTextPrefix; }
        protected getService() { return MasterService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}