
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class DistrictMasterSuppGrid extends Serenity.EntityGrid<DistrictMasterSuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.DistrictMasterSupp'; }
        protected getDialogType() { return DistrictMasterSuppDialog; }
        protected getIdProperty() { return DistrictMasterSuppRow.idProperty; }
        protected getLocalTextPrefix() { return DistrictMasterSuppRow.localTextPrefix; }
        protected getService() { return DistrictMasterSuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        //protected createQuickSearchInput() { }

        protected createQuickFilters() { }

        protected createSlickGrid() {
            this.slickGrid = super.createSlickGrid();

            new Serenity.AutoColumnWidthMixin({
                grid: this
            });

            return this.slickGrid;
        }      
    }
}