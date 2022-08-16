
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
    }
}