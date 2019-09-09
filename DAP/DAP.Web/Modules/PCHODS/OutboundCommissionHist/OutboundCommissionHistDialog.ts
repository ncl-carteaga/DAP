
namespace DAP.PCHODS {

    @Serenity.Decorators.registerClass()
    export class OutboundCommissionHistDialog extends Serenity.EntityDialog<OutboundCommissionHistRow, any> {
        protected getFormKey() { return OutboundCommissionHistForm.formKey; }
        protected getIdProperty() { return OutboundCommissionHistRow.idProperty; }
        protected getLocalTextPrefix() { return OutboundCommissionHistRow.localTextPrefix; }
        protected getNameProperty() { return OutboundCommissionHistRow.nameProperty; }
        protected getService() { return OutboundCommissionHistService.baseUrl; }

        protected form = new OutboundCommissionHistForm(this.idPrefix);

    }
}