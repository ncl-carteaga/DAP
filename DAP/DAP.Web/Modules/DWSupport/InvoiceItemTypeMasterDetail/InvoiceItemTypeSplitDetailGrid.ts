/// <reference path="../InvoiceItemTypeSupp/InvoiceItemTypeSuppGrid.ts" />

namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass("DAP.DWSupport.InvoiceItemTypeSplitDetailGrid")
    export class InvoiceItemTypeSplitDetailGrid extends DWSupport.InvoiceItemTypeSuppGrid {
        constructor(container: JQuery) {
            super(container);
        }

        protected usePager() {
            return false;
        }
    }
}