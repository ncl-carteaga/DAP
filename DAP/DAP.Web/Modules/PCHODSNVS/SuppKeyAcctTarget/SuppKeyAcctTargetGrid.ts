
namespace DAP.PCHODSNVS {

    @Serenity.Decorators.registerClass()
    export class SuppKeyAcctTargetGrid extends Serenity.EntityGrid<SuppKeyAcctTargetRow, any> {
        protected getColumnsKey() { return 'PCHODSNVS.SuppKeyAcctTarget'; }
        protected getDialogType() { return SuppKeyAcctTargetDialog; }
        protected getIdProperty() { return SuppKeyAcctTargetRow.idProperty; }
        protected getLocalTextPrefix() { return SuppKeyAcctTargetRow.localTextPrefix; }
        protected getService() { return SuppKeyAcctTargetService.baseUrl; }

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
                service: SuppKeyAcctTargetService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true,              
                title: "Export to Excel"
            }));

            // add our import button
            //buttons.push({
            //    title: 'Import From Excel',
            //    cssClass: 'export-xlsx-button',
            //    onClick: () => {
            //        // open import dialog, let it handle rest
            //        var dialog = new KeyAcctTargetExcelImportDialog();
            //        dialog.element.on('dialogclose', () => {
            //            this.refresh();
            //            dialog = null;
            //        });
            //        dialog.dialogOpen();
            //    }
            //});

            //buttons.push(Common.PdfExportHelper.createToolButton({
            //    grid: this,
            //    onViewSubmit: () => this.onViewSubmit()
            //}));

            return buttons;
        }
    }
}