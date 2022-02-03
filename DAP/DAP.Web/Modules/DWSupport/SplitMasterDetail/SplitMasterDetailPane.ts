namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass("DAP.DWSupport.SplitPane")
    export class SplitMasterDetailPane extends Serenity.Widget<any> {
        constructor(container: JQuery) {
            super(container);

            var masterDiv = container[0].appendChild(document.createElement("div"));
            masterDiv.classList.add('pane');
            var masterGrid = new SplitMasterGrid($(masterDiv));

            var detailDiv = container[0].appendChild(document.createElement("div"));
            detailDiv.classList.add('pane');
            var detailGrid = new SplitDetailGrid($(detailDiv));

            var resize = Q.debounce(() => {
                if (!this.element)
                    return;

                masterGrid.element.triggerHandler("layout");
                detailGrid.element.triggerHandler("layout");
            }, 250);

            masterGrid.view.onDataLoaded.subscribe(e => masterGrid.slickGrid.setSelectedRows([]));

            masterGrid.slickGrid.onSelectedRowsChanged.subscribe(Q.debounce((e) => {
                if (!this.element)
                    return;

                var rows = masterGrid.slickGrid.getSelectedRows() as number[];
                if (!rows.length) {
                  //  detailGrid.Key1 = null;
                }
                else {
                    masterGrid.slickGrid.scrollRowIntoView(rows[0], false);
                    var master = masterGrid.view.getItem(
                        rows[0]) as MasterRow;
                 //  detailGrid.Key1 = master.Key1;
                 //   detailGrid.Key2 = master.Key2;
                    detailGrid.setTitle('Details of ' + master.Key1 + " - " + master.Key2);
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