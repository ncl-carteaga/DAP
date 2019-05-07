
namespace DAP.NCLHDSAR {

    @Serenity.Decorators.registerClass()
    export class RequestTypeGrid extends Serenity.EntityGrid<RequestTypeRow, any> {
        protected getColumnsKey() { return 'NCLHDSAR.RequestType'; }
        protected getDialogType() { return RequestTypeDialog; }
        protected getIdProperty() { return RequestTypeRow.idProperty; }
        protected getLocalTextPrefix() { return RequestTypeRow.localTextPrefix; }
        protected getService() { return RequestTypeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}