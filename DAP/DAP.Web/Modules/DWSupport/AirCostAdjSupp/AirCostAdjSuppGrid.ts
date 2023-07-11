
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class AirCostAdjSuppGrid extends Serenity.EntityGrid<AirCostAdjSuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.AirCostAdjSupp'; }
        protected getDialogType() { return AirCostAdjSuppDialog; }
        protected getIdProperty() { return AirCostAdjSuppRow.idProperty; }
        protected getLocalTextPrefix() { return AirCostAdjSuppRow.localTextPrefix; }
        protected getService() { return AirCostAdjSuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: AirCostAdjSuppService.baseUrl + '/ExcelExport',
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
                    var dialog = new AirCostAdjSuppExcelImport();
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