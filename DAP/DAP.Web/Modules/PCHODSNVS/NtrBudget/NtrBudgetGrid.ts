
namespace DAP.PCHODSNVS {

    @Serenity.Decorators.registerClass()
    export class NtrBudgetGrid extends Serenity.EntityGrid<NtrBudgetRow, any> {
        protected getColumnsKey() { return 'PCHODSNVS.NtrBudget'; }
        protected getDialogType() { return NtrBudgetDialog; }
        protected getIdProperty() { return NtrBudgetRow.idProperty; }
        protected getLocalTextPrefix() { return NtrBudgetRow.localTextPrefix; }
        protected getService() { return NtrBudgetService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}