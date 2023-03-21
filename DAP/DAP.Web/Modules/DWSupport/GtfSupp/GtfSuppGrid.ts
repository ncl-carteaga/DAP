
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class GtfSuppGrid extends Serenity.EntityGrid<GtfSuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.GtfSupp'; }
        protected getDialogType() { return GtfSuppDialog; }
        protected getIdProperty() { return GtfSuppRow.idProperty; }
        protected getLocalTextPrefix() { return GtfSuppRow.localTextPrefix; }
        protected getService() { return GtfSuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}