
namespace DAP.PCHODS {

    @Serenity.Decorators.registerClass()
    export class OutboundCommissionPeriodDialog extends Serenity.EntityDialog<OutboundCommissionPeriodRow, any> {
        protected getFormKey() { return OutboundCommissionPeriodForm.formKey; }
        protected getIdProperty() { return OutboundCommissionPeriodRow.idProperty; }
        protected getLocalTextPrefix() { return OutboundCommissionPeriodRow.localTextPrefix; }
        protected getService() { return OutboundCommissionPeriodService.baseUrl; }

        protected form = new OutboundCommissionPeriodForm(this.idPrefix);

    }
}