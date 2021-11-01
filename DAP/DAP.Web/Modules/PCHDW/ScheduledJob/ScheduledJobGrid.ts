
namespace DAP.PCHDW {

    @Serenity.Decorators.registerClass()
    export class ScheduledJobGrid extends Serenity.EntityGrid<ScheduledJobRow, any> {
        protected getColumnsKey() { return 'PCHDW.ScheduledJob'; }
        protected getDialogType() { return ScheduledJobDialog; }
        protected getIdProperty() { return ScheduledJobRow.idProperty; }
        protected getLocalTextPrefix() { return ScheduledJobRow.localTextPrefix; }
        protected getService() { return ScheduledJobService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}