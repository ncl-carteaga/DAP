
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class GuestPreventDepartureDialog extends Serenity.EntityDialog<GuestPreventDepartureRow, any> {
        protected getFormKey() { return GuestPreventDepartureForm.formKey; }
        protected getIdProperty() { return GuestPreventDepartureRow.idProperty; }
        protected getLocalTextPrefix() { return GuestPreventDepartureRow.localTextPrefix; }
        protected getNameProperty() { return GuestPreventDepartureRow.nameProperty; }
        protected getService() { return GuestPreventDepartureService.baseUrl; }

        protected form = new GuestPreventDepartureForm(this.idPrefix);

    }
}