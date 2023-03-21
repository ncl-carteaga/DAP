
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class UpgradeAdvAdjSuppGrid extends Serenity.EntityGrid<UpgradeAdvAdjSuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.UpgradeAdvAdjSupp'; }
        protected getDialogType() { return UpgradeAdvAdjSuppDialog; }
        protected getIdProperty() { return UpgradeAdvAdjSuppRow.idProperty; }
        protected getLocalTextPrefix() { return UpgradeAdvAdjSuppRow.localTextPrefix; }
        protected getService() { return UpgradeAdvAdjSuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}