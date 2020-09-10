
namespace DAP.SSISConfig {

    @Serenity.Decorators.registerClass()
    export class MicrosDataFlowGrid extends Serenity.EntityGrid<MicrosDataFlowRow, any> {
        protected getColumnsKey() { return 'SSISConfig.MicrosDataFlow'; }
        protected getDialogType() { return MicrosDataFlowDialog; }
        protected getIdProperty() { return MicrosDataFlowRow.idProperty; }
        protected getLocalTextPrefix() { return MicrosDataFlowRow.localTextPrefix; }
        protected getService() { return MicrosDataFlowService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons(): Serenity.ToolButton[] {
            var buttons = super.getButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            return buttons;
        }
    }
}