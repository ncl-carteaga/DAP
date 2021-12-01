
namespace DAP.PCHODSNVS {

    @Serenity.Decorators.registerClass()
    export class NtrFcstGrid extends Serenity.EntityGrid<NtrFcstRow, any> {
        protected getColumnsKey() { return 'PCHODSNVS.NtrFcst'; }
        protected getDialogType() { return NtrFcstDialog; }
        protected getIdProperty() { return NtrFcstRow.idProperty; }
        protected getLocalTextPrefix() { return NtrFcstRow.localTextPrefix; }
        protected getService() { return NtrFcstService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }


        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: NtrFcstService.baseUrl + '/ListExcel',
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
                    var dialog = new NtrFcstExcelImportDialog();
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