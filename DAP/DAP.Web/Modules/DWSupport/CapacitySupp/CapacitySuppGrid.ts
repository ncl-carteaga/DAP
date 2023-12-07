
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class CapacitySuppGrid extends Serenity.EntityGrid<CapacitySuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.CapacitySupp'; }
        protected getDialogType() { return CapacitySuppDialog; }
        protected getIdProperty() { return CapacitySuppRow.idProperty; }
        protected getLocalTextPrefix() { return CapacitySuppRow.localTextPrefix; }
        protected getService() { return CapacitySuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: CapacitySuppService.baseUrl + '/ListExcel',
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
                    var dialog = new CapacitySuppExcelImportDialog();
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