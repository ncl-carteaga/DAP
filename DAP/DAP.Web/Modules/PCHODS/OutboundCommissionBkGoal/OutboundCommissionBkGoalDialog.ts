
namespace DAP.PCHODS {

    @Serenity.Decorators.registerClass()
    export class OutboundCommissionBkGoalDialog extends Serenity.EntityDialog<OutboundCommissionBkGoalRow, any> {
        protected getFormKey() { return OutboundCommissionBkGoalForm.formKey; }
        protected getIdProperty() { return OutboundCommissionBkGoalRow.idProperty; }
        protected getLocalTextPrefix() { return OutboundCommissionBkGoalRow.localTextPrefix; }
        protected getService() { return OutboundCommissionBkGoalService.baseUrl; }

        protected form = new OutboundCommissionBkGoalForm(this.idPrefix);

    }
}