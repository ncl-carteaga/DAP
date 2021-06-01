
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class SailingMasterSuppGrid extends Serenity.EntityGrid<SailingMasterSuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.SailingMasterSupp'; }
        protected getDialogType() { return SailingMasterSuppDialog; }
        protected getIdProperty() { return SailingMasterSuppRow.idProperty; }
        protected getLocalTextPrefix() { return SailingMasterSuppRow.localTextPrefix; }
        protected getService() { return SailingMasterSuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}