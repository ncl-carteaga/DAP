
namespace DAP.NCLHDSAR {

    @Serenity.Decorators.registerClass()
    export class RequestStatusGrid extends Serenity.EntityGrid<RequestStatusRow, any> {
        protected getColumnsKey() { return 'NCLHDSAR.RequestStatus'; }
        protected getDialogType() { return RequestStatusDialog; }
        protected getIdProperty() { return RequestStatusRow.idProperty; }
        protected getLocalTextPrefix() { return RequestStatusRow.localTextPrefix; }
        protected getService() { return RequestStatusService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}