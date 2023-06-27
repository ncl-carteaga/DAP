
namespace DAP.NCLHDSAR {

    @Serenity.Decorators.registerClass()
    export class MarketingRequestGrid extends Serenity.EntityGrid<MarketingRequestRow, any> {
        protected getColumnsKey() { return 'NCLHDSAR.MarketingRequest'; }
        protected getDialogType() { return MarketingRequestDialog; }
        protected getIdProperty() { return MarketingRequestRow.idProperty; }
        protected getLocalTextPrefix() { return MarketingRequestRow.localTextPrefix; }
        protected getService() { return MarketingRequestService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            var buttons = super.getButtons();

            // Update main INSERT button title
            console.log(buttons);
            var _button = Q.first(buttons, x => x.title == "New Marketing Request");
            _button.title = "New Marketing Operation";

            // export button 1
            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: MarketingRequestService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true,
                title: "Export Excel"
            }));

            // import button 1
            buttons.push({
                title: 'Import Change of Address',
                cssClass: 'export-xlsx-button',
                onClick: () => {
                    // open import dialog, let it handle rest
                    var dialog = new MarketingRequestExcelImportDialog(0);
                    dialog.element.on('dialogclose', () => {
                        this.refresh();
                        dialog = null;
                    });

                    dialog.dialogOpen();
                }
            });

            // import button 2
            buttons.push({
                title: 'Import Return Mail',
                cssClass: 'export-xlsx-button',
                onClick: () => {
                    // open import dialog, let it handle rest
                    var dialog = new MarketingRequestExcelImportDialog(1);
                    dialog.element.on('dialogclose', () => {
                        this.refresh();
                        dialog = null;
                    });

                    dialog.dialogOpen();
                }
            });

            // import button 3
            buttons.push({
                title: 'Import Opt Out',
                cssClass: 'export-xlsx-button',
                onClick: () => {
                    // open import dialog, let it handle rest
                    var dialog = new MarketingRequestExcelImportDialog(2);
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