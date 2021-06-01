
namespace DAP.PCHDW {

    @Serenity.Decorators.registerClass()
    export class DimCruiseGrid extends Serenity.EntityGrid<DimCruiseRow, any> {
        protected getColumnsKey() { return 'PCHDW.DimCruise'; }
        protected getDialogType() { return DimCruiseDialog; }
        protected getIdProperty() { return DimCruiseRow.idProperty; }
        protected getLocalTextPrefix() { return DimCruiseRow.localTextPrefix; }
        protected getService() { return DimCruiseService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected createSlickGrid() {
            this.slickGrid = super.createSlickGrid();

            new Serenity.AutoColumnWidthMixin({
                grid: this
            });

            return this.slickGrid;
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: DimCruiseService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true,
                title: "Export to Excel"
            }));

            // add our import button
            buttons.push({
                title: 'Import From Excel',
                cssClass: 'export-xlsx-button',
                onClick: () => {
                    // open import dialog, let it handle rest
                    var dialog = new DimCruiseExcelImportDialog();
                    dialog.element.on('dialogclose', () => {
                        this.refresh();
                        dialog = null;
                    });
                    dialog.dialogOpen();
                }
            });

           // buttons.splice(Q.indexOf(buttons, x => x.title == "Import From Excel"), 1);

            //buttons.push(Common.PdfExportHelper.createToolButton({
            //    grid: this,
            //    onViewSubmit: () => this.onViewSubmit()
            //}));

            return buttons;
        }
    }
}