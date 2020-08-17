
namespace DAP.NCLHDSAR {

    @Serenity.Decorators.registerClass()
    export class RequestStatusDialog extends Serenity.EntityDialog<RequestStatusRow, any> {
        protected getFormKey() { return RequestStatusForm.formKey; }
        protected getIdProperty() { return RequestStatusRow.idProperty; }
        protected getLocalTextPrefix() { return RequestStatusRow.localTextPrefix; }
        protected getNameProperty() { return RequestStatusRow.nameProperty; }
        protected getService() { return RequestStatusService.baseUrl; }

        protected form = new RequestStatusForm(this.idPrefix);

    }
}