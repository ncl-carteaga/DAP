
namespace DAP.PCHODSNVS {

    @Serenity.Decorators.registerClass()
    export class TransferEstimateOciAmtGrid extends Serenity.EntityGrid<TransferEstimateOciAmtRow, any> {
        protected getColumnsKey() { return 'PCHODSNVS.TransferEstimateOciAmt'; }
        protected getDialogType() { return TransferEstimateOciAmtDialog; }
        protected getIdProperty() { return TransferEstimateOciAmtRow.idProperty; }
        protected getLocalTextPrefix() { return TransferEstimateOciAmtRow.localTextPrefix; }
        protected getService() { return TransferEstimateOciAmtService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            var buttons = super.getButtons();
            // export button
            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: TransferEstimateOciAmtService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true,
                title: "Export to Excel"
            }));

            // import button
            buttons.push({
                title: 'Import From Excel',
                cssClass: 'export-xlsx-button',
                onClick: () => {
                    // open import dialog, let it handle rest
                    var dialog = new TransferEstimateOciAmtExcelImportDialog();
                    dialog.element.on('dialogclose', () => {
                        this.refresh();
                        dialog = null;
                    });
                    dialog.dialogOpen();
                }
            });

            return buttons;
        }
    }
}