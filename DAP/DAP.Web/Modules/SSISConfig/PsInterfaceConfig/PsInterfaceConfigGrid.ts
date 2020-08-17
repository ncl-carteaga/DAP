
namespace DAP.SSISConfig {

    @Serenity.Decorators.registerClass()
    export class PsInterfaceConfigGrid extends Serenity.EntityGrid<PsInterfaceConfigRow, any> {
        protected getColumnsKey() { return 'SSISConfig.PsInterfaceConfig'; }
        protected getDialogType() { return PsInterfaceConfigDialog; }
        protected getIdProperty() { return PsInterfaceConfigRow.idProperty; }
        protected getLocalTextPrefix() { return PsInterfaceConfigRow.localTextPrefix; }
        protected getService() { return PsInterfaceConfigService.baseUrl; }

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