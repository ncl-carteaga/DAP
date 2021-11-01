
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class SailingMasterSuppGrid extends Serenity.EntityGrid<SailingMasterSuppRow, any> {
        protected getColumnsKey() { return 'DWSupport.SailingMasterSupp'; }
        protected getDialogType() { return SailingMasterSuppDialog; }
        protected getIdProperty() { return SailingMasterSuppRow.idProperty; }
        protected getLocalTextPrefix() { return SailingMasterSuppRow.localTextPrefix; }
        protected getService() { return SailingMasterSuppService.baseUrl; }

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