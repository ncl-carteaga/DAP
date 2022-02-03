
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class TblStrategicPriceControlGrid extends Serenity.EntityGrid<TblStrategicPriceControlRow, any> {
        protected getColumnsKey() { return 'DWSupport.TblStrategicPriceControl'; }
        protected getDialogType() { return TblStrategicPriceControlDialog; }
        protected getIdProperty() { return TblStrategicPriceControlRow.idProperty; }
        protected getLocalTextPrefix() { return TblStrategicPriceControlRow.localTextPrefix; }
        protected getService() { return TblStrategicPriceControlService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: TblStrategicPriceControlService.baseUrl + '/ListExcel',
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
                    var dialog = new TblStrategicPriceControlExcelImportDialog();
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