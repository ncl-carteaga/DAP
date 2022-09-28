
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class MinibarSetupSuppGrid extends Serenity.EntityGrid<MinibarSetupSuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.MinibarSetupSupp'; }
        protected getDialogType() { return MinibarSetupSuppDialog; }
        protected getIdProperty() { return MinibarSetupSuppRow.idProperty; }
        protected getLocalTextPrefix() { return MinibarSetupSuppRow.localTextPrefix; }
        protected getService() { return MinibarSetupSuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}