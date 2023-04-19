
namespace DAP.PCHODS {

    @Serenity.Decorators.registerClass()
    export class InboundUserOverrideDialog extends Serenity.EntityDialog<InboundUserOverrideRow, any> {
        protected getFormKey() { return InboundUserOverrideForm.formKey; }
        protected getIdProperty() { return InboundUserOverrideRow.idProperty; }
        protected getLocalTextPrefix() { return InboundUserOverrideRow.localTextPrefix; }
        protected getNameProperty() { return InboundUserOverrideRow.nameProperty; }
        protected getService() { return InboundUserOverrideService.baseUrl; }

        protected form = new InboundUserOverrideForm(this.idPrefix);

    }
}