namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass("DAP.DWSupport.InvoiceItemTypeSplitMasterDetailPane")
    export class InvoiceItemTypeSplitMasterDetailPane extends Serenity.Widget<any> {
        constructor(container: JQuery) {
            super(container);

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

                var rows = InvoiceItemTypeMasterGrid.slickGrid.getSelectedRows() as number[];
                if (!rows.length) {
                    InvoiceItemTypeDetailsGrid.invoiceItemTypeGenNatKey = null;
                }
                else {
                    InvoiceItemTypeMasterGrid.slickGrid.scrollRowIntoView(rows[0], false);
                    var master = InvoiceItemTypeMasterGrid.view.getItem(
                        rows[0]) as InvoiceItemTypeMasterSuppRow;
                    InvoiceItemTypeDetailsGrid.invoiceItemTypeGenNatKey = master.InvoiceItemTypeMasterId;
                    InvoiceItemTypeDetailsGrid.setTitle('Invoice Item Type Details of');
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