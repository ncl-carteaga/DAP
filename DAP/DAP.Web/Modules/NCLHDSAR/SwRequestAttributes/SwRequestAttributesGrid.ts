
namespace DAP.NCLHDSAR {

    @Serenity.Decorators.registerClass()
    export class SwRequestAttributesGrid extends Serenity.EntityGrid<SwRequestAttributesRow, any> {
        protected getColumnsKey() { return 'NCLHDSAR.SwRequestAttributes'; }
        protected getDialogType() { return SwRequestAttributesDialog; }
        protected getIdProperty() { return SwRequestAttributesRow.idProperty; }
        protected getLocalTextPrefix() { return SwRequestAttributesRow.localTextPrefix; }
        protected getService() { return SwRequestAttributesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
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