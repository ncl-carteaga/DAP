namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class SailingExclusionSuppGrid extends Serenity.EntityGrid<SailingExclusionSuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.SailingExclusionSupp'; }
        protected getDialogType() { return SailingExclusionSuppDialog; }
        protected getIdProperty() { return SailingExclusionSuppRow.idProperty; }
        protected getLocalTextPrefix() { return SailingExclusionSuppRow.localTextPrefix; }
        protected getService() { return SailingExclusionSuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: SailingExclusionSuppService.baseUrl + '/ListExcel',
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
                    var dialog = new SailingExclusionSuppExcelImportDialog();
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