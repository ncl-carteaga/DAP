
namespace DAP.NCLHDSAR {

    @Serenity.Decorators.registerClass()
    export class RequestAttributesDialog extends Serenity.EntityDialog<RequestAttributesRow, any> {
        protected getFormKey() { return RequestAttributesForm.formKey; }
        protected getIdProperty() { return RequestAttributesRow.idProperty; }
        protected getLocalTextPrefix() { return RequestAttributesRow.localTextPrefix; }
        protected getNameProperty() { return RequestAttributesRow.nameProperty; }
        protected getService() { return RequestAttributesService.baseUrl; }

        protected form = new RequestAttributesForm(this.idPrefix);
    
    }
}