
namespace DAP.PCHODSNVS {

    @Serenity.Decorators.registerClass()
    export class NtrPastMonthsActualGrid extends Serenity.EntityGrid<NtrPastMonthsActualRow, any> {
        protected getColumnsKey() { return 'PCHODSNVS.NtrPastMonthsActual'; }
        protected getDialogType() { return NtrPastMonthsActualDialog; }
        protected getIdProperty() { return NtrPastMonthsActualRow.idProperty; }
        protected getLocalTextPrefix() { return NtrPastMonthsActualRow.localTextPrefix; }
        protected getService() { return NtrPastMonthsActualService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: NtrPastMonthsActualService.baseUrl + '/ListExcel',
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
                    var dialog = new NtrPastMonthsActualExcelImportDialog();
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