
namespace DAP.PCHODS {

    import fields = UarUnknownReviewerRow.Fields;

    @Serenity.Decorators.registerClass()
    export class UarUnknownReviewerGrid extends Serenity.EntityGrid<UarUnknownReviewerRow, any> {
        protected getColumnsKey() { return 'PCHODS.UarUnknownReviewer'; }
        protected getDialogType() { return UarUnknownReviewerDialog; }
        protected getIdProperty() { return UarUnknownReviewerRow.idProperty; }
        protected getLocalTextPrefix() { return UarUnknownReviewerRow.localTextPrefix; }
        protected getService() { return UarUnknownReviewerService.baseUrl; }

        constructor(container: JQuery) {
            super(container);

            // bindings
            this.slickContainer.on('change', '.edit:input', (e) => this.inputsChange(e));
        }

        protected getButtons(): Serenity.ToolButton[] {

            // call base method to get list of buttons
            // by default, base entity grid adds a few buttons, 
            // add, refresh, column selection in order.
            var buttons = super.getButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            //buttons.splice(Q.indexOf(buttons, x => x.cssClass == "Column Picker"), 1);

            return buttons;
        }

        protected createSlickGrid() {
            this.slickGrid = super.createSlickGrid();

            new Serenity.AutoColumnWidthMixin({
                grid: this
            });

            return this.slickGrid;
        }

        protected onViewProcessData(response) {
            this.pendingChanges = {};
            this.setSaveButtonState();
            return super.onViewProcessData(response);
        }

        protected getColumns() {
            var columns = super.getColumns();

            var packagecd = Q.first(columns, x => x.field === fields.PackageTypeCd);
            packagecd.referencedFields = [fields.PackageTypeCd];
            packagecd.format = ctx => this.selectFormatter(ctx, fields.PackageTypeCd, UarUnknownReviewerRow.getLookup());

            return columns;
        }

    }
}