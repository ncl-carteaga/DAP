
namespace DAP.NCLHDSAR {

    @Serenity.Decorators.registerClass()
    export class RequestAttributesGrid extends Serenity.EntityGrid<RequestAttributesRow, any> {
        protected getColumnsKey() { return 'NCLHDSAR.RequestAttributes'; }
        protected getDialogType() { return RequestAttributesDialog; }
        protected getIdProperty() { return RequestAttributesRow.idProperty; }
        protected getLocalTextPrefix() { return RequestAttributesRow.localTextPrefix; }
        protected getService() { return RequestAttributesService.baseUrl; }

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