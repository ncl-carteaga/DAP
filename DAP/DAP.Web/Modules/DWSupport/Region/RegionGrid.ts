
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class RegionGrid extends Serenity.EntityGrid<RegionRow, any> {
        protected getColumnsKey() { return 'DWSupport.Region'; }
        protected getDialogType() { return RegionDialog; }
        protected getIdProperty() { return RegionRow.idProperty; }
        protected getLocalTextPrefix() { return RegionRow.localTextPrefix; }
        protected getService() { return RegionService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}