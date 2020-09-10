
namespace DAP.SSISConfig {

    @Serenity.Decorators.registerClass()
    export class SsisConfigBaseGrid extends Serenity.EntityGrid<SsisConfigBaseRow, any> {
        protected getColumnsKey() { return 'SSISConfig.SsisConfigBase'; }
        protected getDialogType() { return SsisConfigBaseDialog; }
        protected getIdProperty() { return SsisConfigBaseRow.idProperty; }
        protected getLocalTextPrefix() { return SsisConfigBaseRow.localTextPrefix; }
        protected getService() { return SsisConfigBaseService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getQuickFilters() {
            var flt = super.getQuickFilters();
            var Configfilter = Q.tryFirst(flt, f => f.field == SsisConfigBaseRow.Fields.ConfigurationFilter);
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

            if (!Authorization.hasPermission("SSISConfig:ConfigAdmin")) {
                buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            }

            return buttons;
        }
    }
}