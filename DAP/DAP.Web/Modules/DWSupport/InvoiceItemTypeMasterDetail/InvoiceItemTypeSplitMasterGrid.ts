/// <reference path="../InvoiceItemTypeMasterSupp/InvoiceItemTypeMasterSuppGrid.ts" />

namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass("DAP.DWSupport.InvoiceItemTypeSplitMasterGrid")
    export class InvoiceItemTypeSplitMasterGrid extends InvoiceItemTypeMasterSuppGrid {

        constructor(container: JQuery) {
            super(container);
        }

        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            opt.enableCellNavigation = true;
            return opt;
        }

        protected createSlickGrid() {
            var grid = super.createSlickGrid();
            grid.setSelectionModel(new Slick.RowSelectionModel());
            return grid;
        }
    }
}