
namespace DAP.PCHODSNVS {

    @Serenity.Decorators.registerClass()
    export class NtrFcstDialog extends Serenity.EntityDialog<NtrFcstRow, any> {
        protected getFormKey() { return NtrFcstForm.formKey; }
        protected getIdProperty() { return NtrFcstRow.idProperty; }
        protected getLocalTextPrefix() { return NtrFcstRow.localTextPrefix; }
        protected getNameProperty() { return NtrFcstRow.nameProperty; }
        protected getService() { return NtrFcstService.baseUrl; }

        protected form = new NtrFcstForm(this.idPrefix);

    }
}