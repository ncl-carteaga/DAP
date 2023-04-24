
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class VoyageBudgetFinalSuppGrid extends Serenity.EntityGrid<VoyageBudgetFinalSuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.VoyageBudgetFinalSupp'; }
        protected getDialogType() { return VoyageBudgetFinalSuppDialog; }
        protected getIdProperty() { return VoyageBudgetFinalSuppRow.idProperty; }
        protected getLocalTextPrefix() { return VoyageBudgetFinalSuppRow.localTextPrefix; }
        protected getService() { return VoyageBudgetFinalSuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: VoyageBudgetFinalSuppService.baseUrl + '/ListExcel',
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
                    var dialog = new VoyageBudgetFinalExcelImportDialog();
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