
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class StlyDatesDialog extends Serenity.EntityDialog<StlyDatesRow, any> {
        protected getFormKey() { return StlyDatesForm.formKey; }
        protected getIdProperty() { return StlyDatesRow.idProperty; }
        protected getLocalTextPrefix() { return StlyDatesRow.localTextPrefix; }
        protected getNameProperty() { return StlyDatesRow.nameProperty; }
        protected getService() { return StlyDatesService.baseUrl; }

        protected form = new StlyDatesForm(this.idPrefix);

    }
}