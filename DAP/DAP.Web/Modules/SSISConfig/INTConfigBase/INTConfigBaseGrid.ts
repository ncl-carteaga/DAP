
namespace DAP.SSISConfig {

    @Serenity.Decorators.registerClass()
    export class INTConfigBaseGrid extends Serenity.EntityGrid<INTConfigBaseRow, any> {
        protected getColumnsKey() { return 'SSISConfig.INTConfigBase'; }
        protected getDialogType() { return INTConfigBaseDialog; }
        protected getIdProperty() { return INTConfigBaseRow.idProperty; }
        protected getLocalTextPrefix() { return INTConfigBaseRow.localTextPrefix; }
        protected getService() { return INTConfigBaseService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getQuickFilters() {
            var flt = super.getQuickFilters();
            var Configfilter = Q.tryFirst(flt, f => f.field == INTConfigBaseRow.Fields.ConfigurationFilter);
            Configfilter.cssClass = 'configfilter-filter';

            return flt;
        }

        protected createSlickGrid() {
            this.slickGrid = super.createSlickGrid();

            new Serenity.AutoColumnWidthMixin({
                grid: this
            });

            return this.slickGrid;
        }

        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            return buttons;
        }
    }
}