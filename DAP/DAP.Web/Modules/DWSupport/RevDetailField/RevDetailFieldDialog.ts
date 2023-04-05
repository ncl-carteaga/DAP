
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class RevDetailFieldDialog extends Serenity.EntityDialog<RevDetailFieldRow, any> {
        protected getFormKey() { return RevDetailFieldForm.formKey; }
        protected getIdProperty() { return RevDetailFieldRow.idProperty; }
        protected getLocalTextPrefix() { return RevDetailFieldRow.localTextPrefix; }
        protected getNameProperty() { return RevDetailFieldRow.nameProperty; }
        protected getService() { return RevDetailFieldService.baseUrl; }

        protected form = new RevDetailFieldForm(this.idPrefix);

    }
}