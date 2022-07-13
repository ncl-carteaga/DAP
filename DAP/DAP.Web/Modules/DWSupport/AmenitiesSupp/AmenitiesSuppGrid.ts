
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class AmenitiesSuppGrid extends Serenity.EntityGrid<AmenitiesSuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.AmenitiesSupp'; }
        protected getDialogType() { return AmenitiesSuppDialog; }
        protected getIdProperty() { return AmenitiesSuppRow.idProperty; }
        protected getLocalTextPrefix() { return AmenitiesSuppRow.localTextPrefix; }
        protected getService() { return AmenitiesSuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: AmenitiesSuppService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true,
                title: "Export to Excel"
            }));

            return buttons;
        }

    }
}