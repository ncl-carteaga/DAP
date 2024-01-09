
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class RegionMasterSuppGrid extends Serenity.EntityGrid<RegionMasterSuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.RegionMasterSupp'; }
        protected getDialogType() { return RegionMasterSuppDialog; }
        protected getIdProperty() { return RegionMasterSuppRow.idProperty; }
        protected getLocalTextPrefix() { return RegionMasterSuppRow.localTextPrefix; }
        protected getService() { return RegionMasterSuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}