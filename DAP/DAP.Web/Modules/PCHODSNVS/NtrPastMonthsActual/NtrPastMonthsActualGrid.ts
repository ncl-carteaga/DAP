
namespace DAP.PCHODSNVS {

    @Serenity.Decorators.registerClass()
    export class NtrPastMonthsActualGrid extends Serenity.EntityGrid<NtrPastMonthsActualRow, any> {
        protected getColumnsKey() { return 'PCHODSNVS.NtrPastMonthsActual'; }
        protected getDialogType() { return NtrPastMonthsActualDialog; }
        protected getIdProperty() { return NtrPastMonthsActualRow.idProperty; }
        protected getLocalTextPrefix() { return NtrPastMonthsActualRow.localTextPrefix; }
        protected getService() { return NtrPastMonthsActualService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}