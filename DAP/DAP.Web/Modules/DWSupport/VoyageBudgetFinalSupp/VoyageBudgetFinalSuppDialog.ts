
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class VoyageBudgetFinalSuppDialog extends Serenity.EntityDialog<VoyageBudgetFinalSuppRow, any> {
        protected getFormKey() { return VoyageBudgetFinalSuppForm.formKey; }
        protected getIdProperty() { return VoyageBudgetFinalSuppRow.idProperty; }
        protected getLocalTextPrefix() { return VoyageBudgetFinalSuppRow.localTextPrefix; }
        protected getNameProperty() { return VoyageBudgetFinalSuppRow.nameProperty; }
        protected getService() { return VoyageBudgetFinalSuppService.baseUrl; }

        protected form = new VoyageBudgetFinalSuppForm(this.idPrefix);

    }
}