
namespace DAP.DWSupport {

    @Serenity.Decorators.registerClass()
    export class RevDetailFieldGrid extends Serenity.EntityGrid<RevDetailFieldRow, any> {
        protected getColumnsKey() { return 'DWSupport.RevDetailField'; }
        protected getDialogType() { return RevDetailFieldDialog; }
        protected getIdProperty() { return RevDetailFieldRow.idProperty; }
        protected getLocalTextPrefix() { return RevDetailFieldRow.localTextPrefix; }
        protected getService() { return RevDetailFieldService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}