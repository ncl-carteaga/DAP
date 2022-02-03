/// <reference path="../Master/MasterGrid.ts" />

namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass("DAP.DWSupport.SplitMasterGrid")
    export class SplitMasterGrid extends MasterGrid {

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