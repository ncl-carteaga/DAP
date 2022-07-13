namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass("DAP.DWSupport.SplitPane")
    export class SplitMasterDetailPane extends Serenity.Widget<any> {
        constructor(container: JQuery) {
            super(container);

            var masterDiv = container[0].appendChild(document.createElement("div"));
            masterDiv.classList.add('pane');
            var AmenitiesSuppGrid = new SplitMasterGrid($(masterDiv));

            var detailDiv = container[0].appendChild(document.createElement("div"));
            detailDiv.classList.add('pane');
            var AmenityDetailsSuppGrid = new SplitDetailGrid($(detailDiv));

            var resize = Q.debounce(() => {
                if (!this.element)
                    return;

                AmenitiesSuppGrid.element.triggerHandler("layout");
                AmenityDetailsSuppGrid.element.triggerHandler("layout");
            }, 250);

            AmenitiesSuppGrid.view.onDataLoaded.subscribe(e => AmenitiesSuppGrid.slickGrid.setSelectedRows([]));

            AmenitiesSuppGrid.slickGrid.onSelectedRowsChanged.subscribe(Q.debounce((e) => {
                if (!this.element)
                    return;

                var rows = AmenitiesSuppGrid.slickGrid.getSelectedRows() as number[];
                if (!rows.length) {
                    AmenityDetailsSuppGrid.amenityID = null;
                }
                else {
                    AmenitiesSuppGrid.slickGrid.scrollRowIntoView(rows[0], false);
                    var master = AmenitiesSuppGrid.view.getItem(
                        rows[0]) as AmenitiesSuppRow;
                    AmenityDetailsSuppGrid.amenityID = master.AmenityId;
                    AmenityDetailsSuppGrid.setTitle('Amenity Details of ' + master.AmenityId + " - " + master.AmenityCd);
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