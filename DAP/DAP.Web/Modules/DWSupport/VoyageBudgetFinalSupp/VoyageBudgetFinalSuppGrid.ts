
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class VoyageBudgetFinalSuppGrid extends Serenity.EntityGrid<VoyageBudgetFinalSuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.VoyageBudgetFinalSupp'; }
        protected getDialogType() { return VoyageBudgetFinalSuppDialog; }
        protected getIdProperty() { return VoyageBudgetFinalSuppRow.idProperty; }
        protected getLocalTextPrefix() { return VoyageBudgetFinalSuppRow.localTextPrefix; }
        protected getService() { return VoyageBudgetFinalSuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}