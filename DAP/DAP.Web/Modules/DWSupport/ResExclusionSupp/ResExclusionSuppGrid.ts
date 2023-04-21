
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class ResExclusionSuppGrid extends Serenity.EntityGrid<ResExclusionSuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.ResExclusionSupp'; }
        protected getDialogType() { return ResExclusionSuppDialog; }
        protected getIdProperty() { return ResExclusionSuppRow.idProperty; }
        protected getLocalTextPrefix() { return ResExclusionSuppRow.localTextPrefix; }
        protected getService() { return ResExclusionSuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: ResExclusionSuppService.baseUrl + '/ListExcel',
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
                    var dialog = new ResExclusionSuppExcelImport();
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