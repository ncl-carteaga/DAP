
namespace DAP.PCHODS {

    @Serenity.Decorators.registerClass()
    export class OutboundCommissionHistAuDialog extends Serenity.EntityDialog<OutboundCommissionHistAuRow, any> {
        protected getFormKey() { return OutboundCommissionHistAuForm.formKey; }
        protected getIdProperty() { return OutboundCommissionHistAuRow.idProperty; }
        protected getLocalTextPrefix() { return OutboundCommissionHistAuRow.localTextPrefix; }
        protected getNameProperty() { return OutboundCommissionHistAuRow.nameProperty; }
        protected getService() { return OutboundCommissionHistAuService.baseUrl; }

        protected form = new OutboundCommissionHistAuForm(this.idPrefix);

    }
}