
namespace DAP.PCHODSNVS {

    @Serenity.Decorators.registerClass()
    export class NtrIntlDatelineCruisesDialog extends Serenity.EntityDialog<NtrIntlDatelineCruisesRow, any> {
        protected getFormKey() { return NtrIntlDatelineCruisesForm.formKey; }
        protected getIdProperty() { return NtrIntlDatelineCruisesRow.idProperty; }
        protected getLocalTextPrefix() { return NtrIntlDatelineCruisesRow.localTextPrefix; }
        protected getNameProperty() { return NtrIntlDatelineCruisesRow.nameProperty; }
        protected getService() { return NtrIntlDatelineCruisesService.baseUrl; }

        protected form = new NtrIntlDatelineCruisesForm(this.idPrefix);

    }
}