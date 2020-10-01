
namespace DAP.PCHODSNVS {

    @Serenity.Decorators.registerClass()
    export class NtrBudgetDialog extends Serenity.EntityDialog<NtrBudgetRow, any> {
        protected getFormKey() { return NtrBudgetForm.formKey; }
        protected getIdProperty() { return NtrBudgetRow.idProperty; }
        protected getLocalTextPrefix() { return NtrBudgetRow.localTextPrefix; }
        protected getNameProperty() { return NtrBudgetRow.nameProperty; }
        protected getService() { return NtrBudgetService.baseUrl; }

        protected form = new NtrBudgetForm(this.idPrefix);

    }
}