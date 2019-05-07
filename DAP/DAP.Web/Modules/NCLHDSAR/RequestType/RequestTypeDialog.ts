
namespace DAP.NCLHDSAR {

    @Serenity.Decorators.registerClass()
    export class RequestTypeDialog extends Serenity.EntityDialog<RequestTypeRow, any> {
        protected getFormKey() { return RequestTypeForm.formKey; }
        protected getIdProperty() { return RequestTypeRow.idProperty; }
        protected getLocalTextPrefix() { return RequestTypeRow.localTextPrefix; }
        protected getNameProperty() { return RequestTypeRow.nameProperty; }
        protected getService() { return RequestTypeService.baseUrl; }

        protected form = new RequestTypeForm(this.idPrefix);

    }
}