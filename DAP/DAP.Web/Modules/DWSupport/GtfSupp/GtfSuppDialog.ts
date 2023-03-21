
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class GtfSuppDialog extends Serenity.EntityDialog<GtfSuppRow, any> {
        protected getFormKey() { return GtfSuppForm.formKey; }
        protected getIdProperty() { return GtfSuppRow.idProperty; }
        protected getLocalTextPrefix() { return GtfSuppRow.localTextPrefix; }
        protected getNameProperty() { return GtfSuppRow.nameProperty; }
        protected getService() { return GtfSuppService.baseUrl; }

        protected form = new GtfSuppForm(this.idPrefix);

    }
}