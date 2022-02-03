/// <reference path="../Detail/DetailGrid.ts" />

namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass("DAP.DWSupport.SplitDetailGrid")
    export class SplitDetailGrid extends DWSupport.DetailGrid {
        constructor(container: JQuery) {
            super(container);
        }

        protected usePager() {
            return false;
        }
    }
}