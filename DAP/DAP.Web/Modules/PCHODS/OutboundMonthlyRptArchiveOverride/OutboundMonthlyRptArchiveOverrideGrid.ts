
namespace DAP.PCHODS {

    @Serenity.Decorators.registerClass()
    export class OutboundMonthlyRptArchiveOverrideGrid extends Serenity.EntityGrid<OutboundMonthlyRptArchiveOverrideRow, any> {
        protected getColumnsKey() { return 'PCHODS.OutboundMonthlyRptArchiveOverride'; }
        protected getDialogType() { return OutboundMonthlyRptArchiveOverrideDialog; }
        protected getIdProperty() { return OutboundMonthlyRptArchiveOverrideRow.idProperty; }
        protected getLocalTextPrefix() { return OutboundMonthlyRptArchiveOverrideRow.localTextPrefix; }
        protected getService() { return OutboundMonthlyRptArchiveOverrideService.baseUrl; }

        private canSubmit: boolean;

        constructor(container: JQuery) {
            super(container);
            this.canSubmit = false;
        }

        protected onViewSubmit() {
            super.onViewSubmit();
            if (this.canSubmit) {
                this.canSubmit = false;
                return true;
            } else {
                return false;
            }
        }

        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            buttons.push({
                title: "Search",
                cssClass: "search-button",
                onClick: () => {
                    this.canSubmit = true;
                    this.view.populate();
                }
            });

            return buttons;
        }

        protected getPersistanceStorage(): Serenity.SettingStorage {
            return null;
        }

        protected createSlickGrid() {
            this.slickGrid = super.createSlickGrid();

            new Serenity.AutoColumnWidthMixin({
                grid: this
            });

            return this.slickGrid;
        }
    }
}