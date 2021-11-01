
namespace DAP.PCHODS {

    @Serenity.Decorators.registerClass()
    export class OutboundCommissionBkGoalGrid extends Serenity.EntityGrid<OutboundCommissionBkGoalRow, any> {
        protected getColumnsKey() { return 'PCHODS.OutboundCommissionBkGoal'; }
        protected getDialogType() { return OutboundCommissionBkGoalDialog; }
        protected getIdProperty() { return OutboundCommissionBkGoalRow.idProperty; }
        protected getLocalTextPrefix() { return OutboundCommissionBkGoalRow.localTextPrefix; }
        protected getService() { return OutboundCommissionBkGoalService.baseUrl; }

        constructor(container: JQuery) {
                super(container);
        }

        //protected createQuickSearchInput() { }

        protected createSlickGrid() {
            this.slickGrid = super.createSlickGrid();

            new Serenity.AutoColumnWidthMixin({
                grid: this
            });

            return this.slickGrid;
        }      
    }
}