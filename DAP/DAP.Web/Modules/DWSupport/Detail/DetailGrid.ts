
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class DetailGrid extends Serenity.EntityGrid<DetailRow, any> {
        protected getColumnsKey() { return 'DWSupport.Detail'; }
        protected getDialogType() { return DetailDialog; }
        protected getIdProperty() { return DetailRow.idProperty; }
        protected getLocalTextPrefix() { return DetailRow.localTextPrefix; }
        protected getService() { return DetailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}