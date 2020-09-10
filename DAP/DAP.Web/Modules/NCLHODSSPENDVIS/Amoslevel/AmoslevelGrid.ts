
namespace DAP.NCLHODSSPENDVIS {

    @Serenity.Decorators.registerClass()
    export class AmoslevelGrid extends Serenity.EntityGrid<AmoslevelRow, any> {
        protected getColumnsKey() { return 'NCLHODSSPENDVIS.Amoslevel'; }
        protected getDialogType() { return AmoslevelDialog; }
        protected getIdProperty() { return AmoslevelRow.idProperty; }
        protected getLocalTextPrefix() { return AmoslevelRow.localTextPrefix; }
        protected getService() { return AmoslevelService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: AmoslevelService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            //buttons.push(Common.PdfExportHelper.createToolButton({
            //    grid: this,
            //    onViewSubmit: () => this.onViewSubmit()
            //}));

            return buttons;
        }
    }
}