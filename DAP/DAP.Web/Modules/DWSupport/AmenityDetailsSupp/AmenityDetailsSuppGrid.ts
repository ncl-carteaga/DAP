
namespace DAP.DWSupport {

    import fld = AmenityDetailsSuppRow.Fields;

    @Serenity.Decorators.registerClass()
    export class AmenityDetailsSuppGrid extends Serenity.EntityGrid<AmenityDetailsSuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.AmenityDetailsSupp'; }
        protected getDialogType() { return AmenityDetailsSuppDialog; }
        protected getIdProperty() { return AmenityDetailsSuppRow.idProperty; }
        protected getLocalTextPrefix() { return AmenityDetailsSuppRow.localTextPrefix; }
        protected getService() { return AmenityDetailsSuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: AmenityDetailsSuppService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true,
                title: "Export to Excel"
            }));

            return buttons;
        }

        protected addButtonClick() {
            var eq = this.view.params.EqualityFilter;
            this.editItem(<AmenityDetailsSuppRow>{
                AmenityId: eq ? eq.AmenityID : null
            });
        }
    }
}