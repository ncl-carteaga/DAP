
namespace DAP.PCHODSNVS {

    @Serenity.Decorators.registerClass()
    export class NtrFcstGrid extends Serenity.EntityGrid<NtrFcstRow, any> {
        protected getColumnsKey() { return 'PCHODSNVS.NtrFcst'; }
        protected getDialogType() { return NtrFcstDialog; }
        protected getIdProperty() { return NtrFcstRow.idProperty; }
        protected getLocalTextPrefix() { return NtrFcstRow.localTextPrefix; }
        protected getService() { return NtrFcstService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}