
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class DetailDialog extends Serenity.EntityDialog<DetailRow, any> {
        protected getFormKey() { return DetailForm.formKey; }
        protected getIdProperty() { return DetailRow.idProperty; }
        protected getLocalTextPrefix() { return DetailRow.localTextPrefix; }
        protected getNameProperty() { return DetailRow.nameProperty; }
        protected getService() { return DetailService.baseUrl; }

        protected form = new DetailForm(this.idPrefix);

    }
}