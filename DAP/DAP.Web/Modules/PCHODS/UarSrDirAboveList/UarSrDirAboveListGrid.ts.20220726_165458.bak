
namespace DAP.PCHODS {

    @Serenity.Decorators.registerClass()
    export class UarSrDirAboveListGrid extends Serenity.EntityGrid<UarSrDirAboveListRow, any> {
        protected getColumnsKey() { return 'PCHODS.UarSrDirAboveList'; }
        protected getDialogType() { return UarSrDirAboveListDialog; }
        protected getIdProperty() { return UarSrDirAboveListRow.idProperty; }
        protected getLocalTextPrefix() { return UarSrDirAboveListRow.localTextPrefix; }
        protected getService() { return UarSrDirAboveListService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons(): Serenity.ToolButton[] {

            // call base method to get list of buttons
            // by default, base entity grid adds a few buttons, 
            // add, refresh, column selection in order.
            var buttons = super.getButtons();

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            //buttons.splice(Q.indexOf(buttons, x => x.cssClass == "Column Picker"), 1);

            return buttons;
        }
    }
}