
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class DrydockSuppGrid extends Serenity.EntityGrid<DrydockSuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.DrydockSupp'; }
        protected getDialogType() { return DrydockSuppDialog; }
        protected getIdProperty() { return DrydockSuppRow.idProperty; }
        protected getLocalTextPrefix() { return DrydockSuppRow.localTextPrefix; }
        protected getService() { return DrydockSuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: DrydockSuppService.baseUrl + '/ExcelExport',
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
                    var dialog = new DrydockSuppExcelImport();
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