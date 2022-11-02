namespace DAP.DWSupport {

    /*
     * Connect master grid's row to child grid's row by ID.
    */

    @Serenity.Decorators.registerClass("DAP.DWSupport.InvoiceItemTypeSplitMasterDetailPane")
    export class InvoiceItemTypeSplitMasterDetailPane extends Serenity.Widget<any> {
        constructor(container: JQuery) {
            super(container);

            // get grid objects
            var masterDiv = container[0].appendChild(document.createElement("div"));
            masterDiv.classList.add('pane');
            var InvoiceItemTypeMasterGrid = new InvoiceItemTypeSplitMasterGrid($(masterDiv));

            var detailDiv = container[0].appendChild(document.createElement("div"));
            detailDiv.classList.add('pane');
            var InvoiceItemTypeDetailsGrid = new InvoiceItemTypeSplitDetailGrid($(detailDiv));

            var resize = Q.debounce(() => {
                if (!this.element)
                    return;

                InvoiceItemTypeMasterGrid.element.triggerHandler("layout");
                InvoiceItemTypeDetailsGrid.element.triggerHandler("layout");
            }, 250);

            InvoiceItemTypeMasterGrid.view.onDataLoaded.subscribe(e => InvoiceItemTypeMasterGrid.slickGrid.setSelectedRows([]));


            InvoiceItemTypeMasterGrid.slickGrid.onSelectedRowsChanged.subscribe(Q.debounce((e) => {
                if (!this.element)
                    return;

                // if there are no data rows in master, set child row's ID to null
                var rows = InvoiceItemTypeMasterGrid.slickGrid.getSelectedRows() as number[];
                if (!rows.length) {
                    InvoiceItemTypeDetailsGrid.invoiceItemTypeCd = null;
                }
                // if master grid has data, set child grid's row ID to master's ID
                else {
                    InvoiceItemTypeMasterGrid.slickGrid.scrollRowIntoView(rows[0], false);
                    var master = InvoiceItemTypeMasterGrid.view.getItem(
                        rows[0]) as InvoiceItemTypeMasterSuppRow;

                    InvoiceItemTypeDetailsGrid.invoiceItemTypeCd = 274;
                    //InvoiceItemTypeDetailsGrid.m2 = master.InvoiceItemTypeMasterId;
                    //InvoiceItemTypeDetailsGrid.m3 = master.InvoiceItemTypeMasterId;
                    //InvoiceItemTypeDetailsGrid.m4 = master.InvoiceItemTypeMasterId;

                    InvoiceItemTypeDetailsGrid.setTitle('Invoice Item Type Details of ' + master.InvoiceItemTypeMasterId + ' - ' + master.InvoiceItemTypeCd);
                }
            }, 500));

            var split = Split([masterDiv, detailDiv], {
                direction: "vertical",
                cursor: "row-resize",
                minSize: [380, 310],
                onDragEnd: resize,
                onDrag: resize
            });

            window.setTimeout(() => resize(), 1);
        }
    }
}