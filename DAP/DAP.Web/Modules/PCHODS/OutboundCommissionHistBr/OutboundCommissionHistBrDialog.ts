
namespace DAP.PCHODS {

    @Serenity.Decorators.registerClass()
    export class OutboundCommissionHistBrDialog extends Serenity.EntityDialog<OutboundCommissionHistBrRow, any> {
        protected getFormKey() { return OutboundCommissionHistBrForm.formKey; }
        protected getIdProperty() { return OutboundCommissionHistBrRow.idProperty; }
        protected getLocalTextPrefix() { return OutboundCommissionHistBrRow.localTextPrefix; }
        protected getNameProperty() { return OutboundCommissionHistBrRow.nameProperty; }
        protected getService() { return OutboundCommissionHistBrService.baseUrl; }

        protected form = new OutboundCommissionHistBrForm(this.idPrefix);

    }
}