
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class FinReportPublishingSuppGrid extends Serenity.EntityGrid<FinReportPublishingSuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.FinReportPublishingSupp'; }
        protected getDialogType() { return FinReportPublishingSuppDialog; }
        protected getIdProperty() { return FinReportPublishingSuppRow.idProperty; }
        protected getLocalTextPrefix() { return FinReportPublishingSuppRow.localTextPrefix; }
        protected getService() { return FinReportPublishingSuppService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons(): Serenity.ToolButton[] {

            var buttons = super.getButtons();

            var btn = Q.first(buttons, x => x.cssClass == "add-button");
            btn.title = Q.text("Add New");            

            return buttons;
        }

    }
}