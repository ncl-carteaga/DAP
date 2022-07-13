/// <reference path="../AmenitiesSupp/AmenityDetailGrid.ts" />

namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass("DAP.DWSupport.SplitDetailGrid")
    export class SplitDetailGrid extends DWSupport.AmenityDetailGrid {
        constructor(container: JQuery) {
            super(container);
        }

        protected usePager() {
            return false;
        }
    }
}