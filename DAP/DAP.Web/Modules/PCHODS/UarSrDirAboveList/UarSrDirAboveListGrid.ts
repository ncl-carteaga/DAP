
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

            var buttons = super.getButtons();
            // remove 'add button' at it's index
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            return buttons;
        }
    }
}