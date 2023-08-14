
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class CappingAdjustmentsSuppGrid extends Serenity.EntityGrid<CappingAdjustmentsSuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.CappingAdjustmentsSupp'; }
        protected getDialogType() { return CappingAdjustmentsSuppDialog; }
        protected getIdProperty() { return CappingAdjustmentsSuppRow.idProperty; }
        protected getLocalTextPrefix() { return CappingAdjustmentsSuppRow.localTextPrefix; }
        protected getService() { return CappingAdjustmentsSuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: CappingAdjustmentsSuppService.baseUrl + '/ListExcel',
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
                    var dialog = new CappingAdjustmentsSuppExcelImportDialog();
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