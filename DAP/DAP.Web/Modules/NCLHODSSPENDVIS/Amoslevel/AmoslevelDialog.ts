
namespace DAP.NCLHODSSPENDVIS {

    @Serenity.Decorators.registerClass()
    export class AmoslevelDialog extends Serenity.EntityDialog<AmoslevelRow, any> {
        protected getFormKey() { return AmoslevelForm.formKey; }
        protected getIdProperty() { return AmoslevelRow.idProperty; }
        protected getLocalTextPrefix() { return AmoslevelRow.localTextPrefix; }
        protected getNameProperty() { return AmoslevelRow.nameProperty; }
        protected getService() { return AmoslevelService.baseUrl; }

        protected form = new AmoslevelForm(this.idPrefix);

    }
}